"use client"
import Link from "next/link";
import React from "react";
import { IoLogoYoutube } from "react-icons/io";


function Logo({ size = "30" }) {
    return (
        <>
            <Link href={'/'} className="flex gap-2 items-center">
                <IoLogoYoutube
                    size={size}
                    color="#A855F7"
                />
                <span className="font-bold text-white">FLPTUBE</span>
            </Link>
        </>
    );
}

export default Logo;