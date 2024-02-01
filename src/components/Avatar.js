"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";


function Avatar({ src, channelName }) {
    return (
        <>
            <Link href={`/channel/${channelName}`}>
                <Image
                    src={src}
                    alt="avatar" height={50} width={50}
                    className="w-8 h-8 rounded-full object-cover"
                />
            </Link>
        </>
    );
}

export default Avatar;