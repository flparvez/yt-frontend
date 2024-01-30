"use client"
import React, { useEffect } from "react";
// import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideos } from "../store/Slices/videoSlice.js";

import { VideoList } from "../components/index.js";
import HomeSkeleton from "../skeleton/HomeSkelton.js";
import Link from "next/link";

function HomePage() {
    const dispatch = useDispatch();
    const videos = useSelector((state) => state.video?.videos?.docs);
    const loading = useSelector((state) => state.video?.loading);

    useEffect(() => {
        dispatch(getAllVideos());
    }, [dispatch]);

    if (loading) {
        return <HomeSkeleton />
    }
    return (
       <div className="w-full sm:px-5 px-1 sm:mt-5 mt-2">
         
      
            <div className="text-white mb-20 sm:mb-0 w-full grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 overflow-y-scroll">
                {videos?.map((video) => (
                    <Link
                        href={`/watch/${video._id}`}
                        key={video._id}
                    >
                        <VideoList
                            avatar={video.ownerDetails?.avatar.url}
                            duration={video.duration}
                            title={video.title}
                            thumbnail={video.thumbnail?.url}
                            createdAt={video.createdAt}
                            views={video.views}
                            // channelName={video.ownerDetails.username}
                        />
                    </Link>
                ))}
            </div>
         </div>
    );
}

export default HomePage;