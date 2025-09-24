import React from 'react';
import { useState } from "react";

const  SearchBar = ({ onSearch }) =>  {
  const [input, setInput] = useState("");

  return (
    <div className="flex gap-2 justify-center my-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city name"
        className="border p-2 rounded w-64"
      />
      <button
        onClick={() => onSearch(input)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;