"use client"
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggleSubscription } from "../store/Slices/subscriptionSlice";
import EditAvatar from "../components/EditAvatar";
import Image from "next/image";
import Link from "next/link";


function ChannelHeader({
    coverImage,
    avatar,
    username,
    fullName,
    subscribersCount,
    subscribedCount,
    isSubscribed,
    channelId,
    edit,
}) {
    const [localIsSubscribed, setLocalIsSubscribed] = useState(isSubscribed);
    const [localSubscribersCount, setLocalSubscribersCount] =
        useState(subscribersCount);
    const dispatch = useDispatch();
    const userProfile = useSelector((state) => state.user?.profileData?._id);
    const user = useSelector((state) => state.auth?.userData?._id);

    useEffect(() => {
        setLocalSubscribersCount(subscribersCount);
        setLocalIsSubscribed(isSubscribed);
    }, [subscribersCount, isSubscribed]);

    const handleSubscribe = () => {
        dispatch(toggleSubscription(channelId));
        setLocalIsSubscribed((prev) => !prev);
        if (localIsSubscribed) {
            setLocalSubscribersCount((prev) => prev - 1);
        } else {
            setLocalSubscribersCount((prev) => prev + 1);
        }
    };

    // useEffect(())

    return (
        <>
            <div className="w-full text-white">
                {/* coverImage section */}
                <section className="w-full">
                    {coverImage ? (
                        <div className="relative">
                            <Image
                                src={coverImage} height={50} width={50}
                                className="sm:h-40 h-28 w-full object-cover" alt=""
                            />
                            {edit && (
                                <div className="absolute inset-0 flex justify-center items-center">
                                    <EditAvatar cover={true} />
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="sm:h-40 h-28 w-full border-slate-600 border-b bg-black"></div>
                    )}
                </section>
                {/*channel details section  */}
                <section className=" w-full sm:px-5 p-2 flex sm:flex-row flex-col items-start sm:gap-4">
                    <div className=" h-12">
                        <div className="relative sm:w-32 w-28 sm:h-32 h-28">
                            <Image
                                src={avatar} width={50} height={50}
                                className="rounded-full sm:w-32 w-28 sm:h-32 h-28 object-cover absolute sm:bottom-10 bottom-20 outline-none" alt=""
                            />
                            {edit && (
                                <div className="absolute inset-0 flex justify-center items-start">
                                    <EditAvatar />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="w-full md:h-24 sm:h-20 flex justify-between items-start px-1">
                        <div>
                            <h1 className="text-xl font-bold">{fullName}</h1>
                            <h3 className="text-sm text-slate-400">
                                @{username}
                            </h3>
                            <div className="flex gap-1">
                                <p className="text-xs text-slate-400">
                                    {localSubscribersCount &&
                                        `${localSubscribersCount} Subscribers`}
                                </p>
                                <p className="text-xs text-slate-400">
                                    {subscribedCount &&
                                        `${subscribedCount} Subscribed`}
                                </p>
                            </div>
                        </div>
                        {user == userProfile && !edit && (
                            <Link href={"/edit"}>
                                <button className="border-slate-500 hover:scale-110 transition-all text-black font-bold px-4 py-1 bg-purple-500">
                                    Edit
                                </button>
                            </Link>
                        )}
                        {user != userProfile && !edit && (
                            <button
                                onClick={handleSubscribe}
                                className="border-slate-500 hover:scale-110 transition-all text-black font-bold px-4 py-1 bg-purple-500"
                            >
                                {localIsSubscribed ? "Subscribed" : "Subscribe"}
                            </button>
                        )}
                        {edit && (
                            <Link href={`/channel/${username}`}>
                                <button className="border-slate-500 hover:scale-110 transition-all text-black font-bold px-4 py-1 bg-purple-500">
                                    View Channel
                                </button>
                            </Link>
                        )}
                    </div>
                </section>
            </div>
        </>
    );
}

export default ChannelHeader;