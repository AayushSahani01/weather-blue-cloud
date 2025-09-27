import React from 'react';
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const  SearchBar = ({ onSearch }) =>  {
  const [input, setInput] = useState("");
const handleSearch = () => {
  // console.log("search");
    if (!input.trim()) return; 
    onSearch(input);
    setInput(""); 
  };    
 const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // console.log("Enter pressed");
      handleSearch();
    }
  };
  return (
    <div className="flex gap-4 justify-center mt-8 pb-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter your city name ..."
        className="p-3 font-semibold rounded-md shadow-xl w-3/4 hover:border-b-4 border-gray-700 outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500"
        required={true}
            autoFocus={true}
        />
      <button
        onClick={ handleSearch }
                 
        disabled={!input.trim()}
        className="flex justify-center items-center gap-x-2 bg-sky-500 w-fit font-semibold text-lg text-white px-4 py-1 cursor-pointer rounded-md hover:bg-blue-600 shadow-lg transition duration-300 ease-in-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500"
      >
        Search 
<CiSearch size={25} color="white" />

      </button>
    </div>
  );
};

export default SearchBar;