import React from "react";
import { FaCaretDown, FaUser } from "react-icons/fa"
import Logo from '../../assets/logo.png'
import './navbar.css'

const NavLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 1,
        name: "About",
        link: "/#"
    },
    {
        id: 1,
        name: "Contact",
        link: "/#"
    }
]
const DropdownLinks = [
    {
        id: 1,
        name: "Starters",
        link: "/#"
    },
    {
        id: 2,
        name: "Main Course",
        link: "/#"
    },
    {
        id: 3,
        name: "Desert",
        link: "/#"
    },
]

const Navbar = ({ HandlePopup }) => {
    return (<>
        <div data-aos="fade" className="bg-white shadow-md">
            <div className="container flex justify-between py-1 sm:py-7">
                <div className="logo  ">
                    <img src={Logo} alt="Logo" className="w-28 h-auto sm:w-28 md:w-40 lg:w-44 xl:w-52 mt-8 sm:mt-[10px] md:mt-[-15px] lg:mt-8 mr-4 ml-4 sm:ml-[-4px] md:ml-0 "></img>
                </div>
                <div>
                    <ul className="flex items-center gap-10">
                        {
                            NavLinks.map(({ id, name, link }) => (
                                <li key={id}>
                                    <a href={link} className="hidden sm:inline-block hover:text-green-900 text-l font-semibold">{name}</a>
                                </li>
                            ))
                        }
                        {/*Dropdown menu*/}
                        <li className="hidden md:block cursor-pointer group relative">
                            <a
                                href="/#"
                                className="inline-block hover:text-green-900 text-l font-semibold"
                            >
                                <div className="flex items-center gap-[2px] py-2">
                                    Dropdown
                                    <span >
                                        <FaCaretDown className="group-hover:rotate-180 transition" />
                                    </span>
                                </div>
                            </a>
                            {/*dropdown section */}
                            <div className="absolute z-[9999] hidden group-hover:block 
                w-[130px] bg-white text-black shadow-md p-2">
                                <ul>
                                    {
                                        DropdownLinks.map(({ id, name, link }) => (
                                            <li key={id}>
                                                <a
                                                    href={link}
                                                    className="text-l inline-block w-full rounded-md p-2 hover:bg-light/30"
                                                >
                                                    {name}
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </li>
                        {/*Login button */}
                        <li>
                            <button className="flex just-center  items-center gap-2 bg-amber-700 text-l g-[40px] text-white px-5 py-2 hover:scale-105 duration-300 mt-14 sm:mt-2"
                                onClick={HandlePopup}>
                                <FaUser />
                                My Account
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>)
}
export default Navbar;