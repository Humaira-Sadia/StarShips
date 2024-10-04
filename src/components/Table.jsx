import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

const Table = () => {
  const [starships, setStarships] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    // Fetching starships data from the SWAPI API
    fetch("https://swapi.dev/api/starships")
      .then((response) => response.json())
      .then((data) => {
        setStarships(data.results);
      })
      .catch((error) => console.error("Error fetching starships:", error));
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(starships.length / itemsPerPage);

  // Current page data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStarships = starships.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="md:mt-16 text-[15px] sm:text-xl tracking-wider flex flex-col justify-center items-center relative">
      <h1 className="text-5xl font-serif mb-5 md:mb-14">
        Star<span className="italic text-yellow-400">ships</span>
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full table-auto rounded-lg border border-gray-300  bg-black">
          <thead className="text-[15px] sm:text-2xl cursor-pointer italic">
            <tr>
              <th className="border border-gray-300 px-2 py-4 sm:px-4 rounded-tl-lg rounded-tr-lg">
                Name
              </th>
              <th className="border border-gray-300 px-2 py-2 sm:px-4">
                Cost (Credits)
              </th>
              <th className="border border-gray-300 px-2 py-2 sm:px-4 rounded-tr-lg">
                Manufacturer
              </th>
            </tr>
          </thead>
          <tbody className="cursor-pointer">
            {currentStarships.length > 0 ? (
              currentStarships.map((starship, index) => (
                <tr
                  key={starship.name}
                  className={
                    index % 2 === 0 ? "bg-[#000]" : "bg-[rgba(250,204,21,0.8)]"
                  }
                >
                  <td className="border border-gray-300 px-2 py-2 sm:px-4">
                    {starship.name}
                  </td>
                  <td className="border border-gray-300 px-2 py-2 sm:px-4">
                    {starship.cost_in_credits !== "unknown"
                      ? starship.cost_in_credits
                      : "N/A"}
                  </td>
                  <td className="border border-gray-300 px-2 py-2 sm:px-4">
                    {starship.manufacturer}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  className="border border-gray-300 p-6 text-center"
                  colSpan="3"
                >
                  <div className="flex flex-row justify-center text-center items-center gap-5">
                    <div className="loader w-10 h-10 border-4 border-t-transparent rounded-full animate-spin" ></div>
                    <h1 className="text-2xl font-semibold animate-pulse">
                      Loading starships...
                    </h1>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Table;
