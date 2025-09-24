import React from 'react';
import { useState } from "react";

const  SearchBar = ({ onSearch }) =>  {
  const [input, setInput] = useState("");

  return (
    <div className="flex gap-2 justify-center mt-8 pb-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city name"
        className="border focus:border-orange-700 outline-none p-3 font-semibold text-amber-700 border-gray-300 rounded-md shadow-lg focus:shadow-xl focus:outline-none active:border-amber-600 w-64"
        required={true}
        />
      <button
        onClick={() => onSearch(input)}
        className="bg-orange-500 font-bold text-sm text-white px-4 py-2 cursor-pointer rounded-lg hover:bg-orange-600 hover:scale-[1.06] shadow-lg transition duration-300 ease-in-out"
      >
        Search

      </button>
    </div>
  );
};

export default SearchBar;