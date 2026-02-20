import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

const Search = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);
  };

  const clearSearch = () => {
    setValue("");
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Search Icon */}
      <FiSearch
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        size={18}
      />
      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search experts by name..."
        className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"/>

      {/* Clear Button */}
      {value && (
        <FiX
          onClick={clearSearch}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600"
          size={18}
        />
      )}

    </div>
  );
};

export default Search;