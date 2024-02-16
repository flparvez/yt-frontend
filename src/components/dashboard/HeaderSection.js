"use client"
import React from "react";


function HeaderSection({ username, setPopUp }) {
    return (
        <section className="flex text-black dark:text-white flex-col sm:flex-row justify-between sm:items-center gap-2">
            <div>
                <h1 className="sm:text-2xl text-xl font-bold">
                    Welcome Back, {username}{" "}
                </h1>
                <p className="text-xs font-light text-slate-400 ">
                    Seamless Video Management, Elevated Results.
                </p>
            </div>
            <div>
                <button
                    className="bg-purple-500 p-2 font-semibold"
                    textColor="text-black"
                    onClick={() =>
                        setPopUp((prev) => ({
                            ...prev,
                            uploadVideo: !prev.uploadVideo,
                        }))
                    }
                >
                    {" "}
                    Upload Video
                </button>
            </div>
        </section>
    );
}

export default HeaderSection;