"use client"
import Link from "next/link";
import React from "react";


function ChannelNavigate({ username, edit }) {
    if (edit) {
        return (
            <>
                <section className="text-white text-center w-full flex justify-evenly items-center border-b-2 border-slate-600 text-xs sm:text-base sm:mt-4 md:mt-0 mt-2">
                    <Link
                        href={`/edit/personalInfo`}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-white text-purple-600 border-b-2 border-purple-600"
                                : ""
                        }
                    >
                        <p className="p-2">Personal Information</p>
                    </Link>
                    <Link
                        href={`/edit/password`}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-white text-purple-600 border-b-2 border-purple-600"
                                : ""
                        }
                    >
                        <p className="p-2">Change Password</p>
                    </Link>
                </section>
            </>
        );
    }
    return (
        <>
            {/* channel options */}
            <section className="text-white w-full flex justify-evenly items-center border-b-2 border-slate-600 text-sm sm:text-base sm:mt-4 md:mt-0 mt-2">
                <Link
                    href={`/channel/${username}/videos`}
                    className={({ isActive }) =>
                        isActive
                            ? "bg-white text-purple-600 border-b-2 border-purple-600"
                            : ""
                    }
                >
                    <p className="p-2">Videos</p>
                </Link>
                <Link
                    href={`/channel/${username}/playlists`}
                    className={({ isActive }) =>
                        isActive
                            ? "bg-white text-purple-600 border-b-2 border-purple-600"
                            : ""
                    }
                >
                    <p className="p-2">Playlists</p>
                </Link>
                <Link
                    href={`/channel/${username}/tweets`}
                    className={({ isActive }) =>
                        isActive
                            ? "bg-white text-purple-600 border-b-2 border-purple-600"
                            : ""
                    }
                >
                    <p className="p-2">Tweets</p>
                </Link>
                <Link
                    href={`/channel/${username}/subscribed`}
                    className={({ isActive }) =>
                        isActive
                            ? "bg-white text-purple-600 border-b-2 border-purple-600"
                            : ""
                    }
                >
                    <p className="p-2">Subscribed</p>
                </Link>
            </section>
        </>
    );
}

export default ChannelNavigate;