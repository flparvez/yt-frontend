"use client"
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { toggleSubscription } from "../store/Slices/subscriptionSlice.js";
import Image from "next/image.js";

function ChannelHeader({
    coverImage,
    avatar,
    username,
    fullName,
    subscribersCount = 0,
    subscribedCount = 0,
    isSubscribed,
    channelId,
}) {
    const [localIsSubscribed, setLocalIsSubscribed] = useState(isSubscribed);
    const [localSubscribersCount, setLocalSubscribersCount] =
        useState(subscribersCount);
    const dispatch = useDispatch();

    const handleSubscribe = () => {
        dispatch(toggleSubscription(channelId));
        setLocalIsSubscribed((prev) => !prev);
        if (localIsSubscribed) {
            setLocalSubscribersCount((prev) => prev - 1);
        } else {
            setLocalSubscribersCount((prev) => prev + 1);
        }
    };

    return (
        <>
            <div className="w-full text-white">
                {/* coverImage section */}
                <section className="w-full">
                    {coverImage ? (
                        <Image width={200} height={200}
                            src={coverImage}
                            className="sm:h-40 h-28 w-full object-cover" alt="Cover Image"
                        />
                    ) : (
                        <div className="sm:h-40 h-28 w-full border-slate-600 border-b bg-black"></div>
                    )}
                </section>
                {/*channel details section  */}
                <section className=" w-full sm:px-5 p-2 flex sm:flex-row flex-col items-start sm:gap-4">
                    <div className="relative h-12">
                        <div className="relative sm:w-32 w-28 sm:h-32 h-28">
                            <Image
                                src={avatar} width={100} height={100}
                                className="rounded-full sm:w-32 w-28 sm:h-32 h-28 object-cover absolute sm:bottom-10 bottom-20 outline-none"
                            alt="Avatar" />
                        </div>
                    </div>
                    <div className="w-full md:h-24 sm:h-20 flex justify-between items-start px-1">
                        <div>
                            <h1 className="text-xl font-bold">{username}</h1>
                            <h3 className="text-sm text-slate-400">
                                @{username}
                            </h3>
                            <div className="flex gap-1">
                                <p className="text-xs text-slate-400">
                                    {localSubscribersCount} Subscribers
                                </p>
                                <p className="text-xs text-slate-400">
                                    {subscribedCount} Subscribed
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={handleSubscribe}
                            className="border-slate-500 hover:scale-110 transition-all text-black font-bold px-4 py-1 bg-purple-500"
                        >
                            {localIsSubscribed ? "Subscribed" : "Subscribe"}
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}

export default ChannelHeader;