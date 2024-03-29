"use client"
import React, { useState } from "react";
import { Search,  Logo } from "../components/index";

import {
    IoCloseCircleOutline,
    BiLike,
    CiSearch,
    CiSettings,
    HiOutlineVideoCamera,
    MdOutlineContactSupport,
    SlMenu,
} from "./icons";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";


function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const authStatus = useSelector((state) => state.auth.status);
    const username = useSelector((state) => state.auth?.userData?.username);
    const profileImg = useSelector((state) => state.auth.userData?.avatar);

    const sidePanelItems = [
        {
            icon: <BiLike size={25} />,
            title: "Liked Videos",
            url: "/liked-videos",
        },
        {
            icon: <HiOutlineVideoCamera size={25} />,
            title: "My Content",
            url: `/channel/${username}`,
        },
        {
            icon: <MdOutlineContactSupport size={25} />,
            title: "Support",
            url: "/support",
        },
        {
            icon: <CiSettings size={25} />,
            title: "Settings",
            url: "/settings",
        },
    ];

    return (
        <>
            <nav className="w-full bg-[#0E0F0F] flex justify-between items-center p-4 sm:gap-5 gap-2 border-b-2 border-gray-500 sticky top-0 z-50">
                <div className="flex items-center justify-center gap-2 cursor-pointer">
                    <Logo />
                </div>

                {/* search for large screens */}
                <div className="w-full sm:w-1/3 hidden sm:block">
                    <Search />
                </div>

                {/* search for small screens */}
                <div className="text-white w-full inline-flex justify-end sm:hidden pr-4">
                    <CiSearch
                        size={30}
                        fontWeight={"bold"}
                    />
                </div>

                {/* login and signup butons for larger screens */}
                {authStatus ? (
                    <div className="rounded-full sm:block hidden">
                        <Image width={50} height={50}
                            src={profileImg}
                            alt="profileImg"
                            className="rounded-full w-10 h-10 object-cover"
                        />
                    </div>
                ) : (
                    <div className="space-x-2 sm:block hidden">
                        <Link href={"/auth/login"}>
                            <button className="bg-[#222222] border text-white hover:bg-black border-slate-500 sm:px-4 sm:py-2 p-2">
                                Login
                            </button>
                        </Link>
                        <Link href={"/auth/signup"}>
                            <button className="font-semibold border text-white hover:bg-[#222222] border-slate-500 sm:px-4 sm:py-2 ">
                                Sign up
                            </button>
                        </Link>
                    </div>
                )}

                {/* hamburger for smaller screens */}
                <div className="sm:hidden block">
                    <div className="text-white ">
                        <SlMenu
                            size={24}
                            onClick={() => setToggleMenu((prev) => !prev)}
                        />
                    </div>
                </div>

                {/* Side bar for smaller screens */}
                {toggleMenu && (
                    <div className="fixed right-0 top-0 text-white flex flex-col border-l h-screen w-[70%] bg-[#0F0F0F] sm:hidden rounded-lg outline-none">
                        <div className="w-full border-b h-20 flex items-center mb-2 justify-between px-3">
                            <div className="flex items-center gap-2">
                                <Logo />
                            </div>
                            <IoCloseCircleOutline
                                size={35}
                                onClick={() => setToggleMenu((prev) => !prev)}
                            />
                        </div>

                        <div className="flex flex-col justify-between h-full py-5 px-3 j">
                            <div className="flex flex-col gap-5">
                                {sidePanelItems.map((item) => (
                                    <Link
                                        href={item.url}
                                        key={item.title}
                                        onClick={() => setToggleMenu(prev => !prev)}
                                        className={({ isActive }) => isActive ? "bg-purple-500" : ""}
                                    >
                                        <div className="flex items-center border border-slate-500 gap-5 px-3 py-1 hover:bg-purple-500">
                                            <div>{item.icon}</div>
                                            <span className="text-lg">
                                                {item.title}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {!authStatus && (
                                <div className="flex flex-col space-y-5 mb-3">
                                    <Link href={"/auth/login"}>
                                        <button className="w-full bg-[#222222] border hover:bg-white hover:text-black border-slate-500 py-1 px-3">
                                            Login
                                        </button>
                                    </Link>
                                    <Link href={"/auth/signup"}>
                                        <button className=" w-full font-semibold border border-slate-500 hover:bg-white hover:text-black py-1 px-3">
                                            Sign up
                                        </button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;