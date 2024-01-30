"use client"
import React from "react";
import { formatDuration, timeAgo } from "../helpers/timeAgo.js";

import Image from "next/image";

import Link from "next/link";
function VideoList({
    thumbnail,
    duration,
    title,
    views = 0,
    avatar,
    channelName,
    createdAt,
}) {
    return (
        <>
            <div className="w-full sm:p-2">
                <div className="relative sm:h-60 h-48">
                    <Image
                        src={thumbnail} width={50} height={50}
                        className="object-cover w-full h-full" alt=""
                    />
                    <span className="absolute bottom-2 right-2 rounded-lg text-sm bg-black py-1 px-2">
                        {formatDuration(duration)}
                    </span>
                </div>
                <div className="flex items-center py-2 px-2 gap-2">
                    {avatar && (
                        <Link href={`/channel/${channelName}`}>
                            <Image width={50} height={50} 
                                src={avatar}
                                className="w-10 h-10 rounded-full object-cover"
                                alt=""
                            />
                        </Link>
                    )}
                    <div>
                        <h2 className="font-medium">{title}</h2>
                        <div className="text-xs space-x-1 text-slate-400">
                            <span>{views} Views</span> .
                            <span>{timeAgo(createdAt)}</span>
                        </div>
                        {channelName && (
                            <h2 className="text-xs space-x-1 text-slate-200">
                                {channelName}
                            </h2>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default VideoList;