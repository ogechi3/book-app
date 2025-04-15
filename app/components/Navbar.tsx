"use client"
import React, { useState } from 'react'
import {FaHome} from "react-icons/fa"
import { IoMdMail } from 'react-icons/io'
import { IoIosSettings } from 'react-icons/io'
import { IoLibrary } from 'react-icons/io5'
import { IconType } from 'react-icons'
import Link from 'next/link'
import { SiNintendoswitch } from 'react-icons/si'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import { DiGroovy } from 'react-icons/di'




const Navbar = () => {
  const [toogleMenu, setToogleMenu] = useState(false)

const showMenu = () => {
  setToogleMenu(!toogleMenu);
}

  return (
    <nav className="flex justify-between py-4 px-8 h-20 shadow-2xl text-2xl w-full top-0 z-10 fixed bg-transparent text-white">
      <h1 className="cursor-pointer text-white">Book App</h1>
      <div className="flex gap-6 ">
        {nav_items.map(({ name, link, icon: Icon }) => (
          <Link
            href={link}
            className="md:flex gap-2 cursor-pointer hidden"
            key={name}
          >
            <Icon size={30} />
            <span>{name}</span>
          </Link>
        ))}
      </div>
      <div className="cursor-pointer">
        <SiNintendoswitch />
      </div>
      {/* MOBILE SCREEN */}

      <div className="md:hidden ">
        <button
          onClick={() => setToogleMenu(!toogleMenu)}
          className="cursor-pointer"
        >
          {toogleMenu ? <MdClose /> : <GiHamburgerMenu />}
        </button>
        {toogleMenu && (
          <div className="px-4 py-6 z-10 absolute left-0 top-20 bg-[#bb9477] text-white w-full justify-center flex-col items-center ">
            {nav_items.map(({ name, link, icon: Icon }) => (
              <Link
                href={link}
                className="flex gap-2 cursor-pointer justify-center items-center py-6 "
                key={name}
              >
                <Icon size={30} />
                <span>{name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

interface NAVITEMS {
    name:string
    link:string
    icon:IconType


}

const nav_items:NAVITEMS[] = [
  { name: "Home", link: "/", icon: FaHome },
  { name: "Contact", link: "/contact", icon: IoMdMail },
  { name: "Library", link: "/library", icon: IoLibrary },
];

export default Navbar
