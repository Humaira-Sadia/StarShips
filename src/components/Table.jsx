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
    <div className="md:mt-16 text-[15px] sm:text-xl tracking-wider flex flex-col justify-center items-center">
      <h1 className="text-5xl font-serif mb-5 md:mb-16">Starships</h1>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full table-auto">
          <thead className="text-[15px] sm:text-2xl">
            <tr>
              <th className="border border-gray-300 px-2 py-4 sm:px-4">Name</th>
              <th className="border border-gray-300 px-2 py-2 sm:px-4">
                Cost (Credits)
              </th>
              <th className="border border-gray-300 px-2 py-2 sm:px-4">
                Manufacturer
              </th>
            </tr>
          </thead>
          <tbody>
            {currentStarships.length > 0 ? (
              currentStarships.map((starship) => (
                <tr key={starship.name}>
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
                  className="border border-gray-300 p-14 text-center text-3xl"
                  colSpan="3"
                >
                  Loading starships...
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
