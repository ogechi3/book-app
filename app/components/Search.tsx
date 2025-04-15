"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";


const Search = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState<any[]>([]);

  const handleSearch = async () => {
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
      <form className="w-max ring-1 mt-6 rounded-[10px] ring-gray-300 cursor-pointer ">
        <div className="flex justify-between items-center ">
          <input
            type="search"
            placeholder="Search by Title/Author"
            className=" p-4 text-2xl text-black bg-white rounded-[10px]"
            onChange={(e) => setQuery(e.target.value)}
          />

          <button
            type="submit"
            className="px-4  text-white cursor-pointer"
            onClick={handleSearch}
          >
            <FaSearch className="" />{" "}
          </button>
        </div>
      </form>

      <ul className="">
        {books.map((book, index) => (
          <li key={index} className="">
            <h3>{book.title}</h3>
            <p>Author:{book.author_name?.join(",")}</p>
            {book.cover_i && (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_}-M.jpg`}
                alt={book.title}
                className='w-32 mt-2'
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
