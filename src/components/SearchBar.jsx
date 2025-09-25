import React from 'react';
import { useState } from "react";

const  SearchBar = ({ onSearch }) =>  {
  const [input, setInput] = useState("");
// const handleSearch = () => {
//     if (!query.trim()) return;

  return (
    <div className="flex gap-4 justify-center mt-8 pb-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your city name ..."
        className="p-3 font-semibold rounded-md shadow-xl w-3/4 hover:border-b-4 border-gray-700 outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500"
        required={true}
            autoFocus={true}
        />
      <button
        onClick={() => onSearch(input)

        }
        className="bg-sky-500 w-fit font-semibold text-md text-white px-6 py-1 cursor-pointer  rounded-md hover:bg-blue-600 hover:scale-[1.04] shadow-lg transition duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500"
      >
        Search

      </button>
    </div>
  );
};

export default SearchBar;