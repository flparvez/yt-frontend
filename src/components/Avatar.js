"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";


function Avatar({ src, channelName }) {
    const navigate = useRouter();

    const handleAvatarClick = (e) => {
        e.stopPropagation()
        navigate.push(`/channel/${channelName}`);
    };
    return (
        <>
            <Image width={50} height={50}
                src={src}
                alt="avatar"
                className="w-8 h-8 rounded-full object-cover"
                onClick={handleAvatarClick}
            />
        </>
    );
}

export default Avatar;