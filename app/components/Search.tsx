"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";


const Search = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState<any[]>([]);

  const handleSearch = async (e:React.FormEvent) => {
    e.preventDefault()
    try {
      const data = await searchBooks(query);
      console.log(data.docs)
      setBooks(data.docs.slice(0, 10));
     
    } catch (err) {
      console.error(err);
    }
  };

  const searchBooks = async (query:string)=> {
    const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
    if(!res.ok) throw new Error('Failed to fetch books');
    return res.json()
}

  return (
    <div className="">
      <form className="w-max ring-1 mt-6 rounded-[10px] ring-gray-300 cursor-pointer " onSubmit={handleSearch}>
        <div className="flex justify-between items-center ">
          <input
            value={query}
            placeholder="Search by Title/Author"
            className=" p-4 text-2xl text-black bg-white rounded-[10px]"
            onChange={(e) => setQuery(e.target.value)}
          />

          <button
            type="submit"
            className="px-4  text-white cursor-pointer"
            onSubmit={handleSearch}
          >
            <FaSearch className="" />{" "}
          </button>
        </div>
      </form>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {books.map((book, index) => (
          <li key={index} className="text-black border rounded shadow cursor-pointer flex flex-col items-center">
            <h3 className="font-semibold">{book.title}</h3>
            <p>Author:{book.author_name?.join(",")}</p>
            {book.cover_i ? (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
                className='w-32 mt-2 h-auto'
              />
            ): (
              <div className="w-32 h-48 mt-2 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">Image Not Available</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
