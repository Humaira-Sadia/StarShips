import React from "react";
import Table from "./components/Table";
import Stars from "./components/Stars";

const App = () => {
  return (
    <div className="p-2 md:px-36 sm:p-10">
      <Stars/>
      <Table />
    </div>
  );
};

export default App;
