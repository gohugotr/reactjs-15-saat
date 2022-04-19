import React from "react"

const SearchBar = () => {
    return (
      <div className="container mx-auto w-4/6 py-4 px-4">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg viewBox="0 0 20 20" class="w-4 h-4 fill-current">
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
              />
            </svg>
          </span>
          <input className="search" placeholder="Ara..." type="text" id="search" name="search" />
        </label>
      </div>
    );
}

export default SearchBar