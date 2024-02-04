"use client"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLikedVideos } from "../../store/Slices/likeSlice.js";
import HomeSkeleton from "../../skeleton/HomeSkelton.js"

import {  NoVideosFound, VideoList } from "../../components/index.js";
import Link from "next/link.js";



function LikedVideos() {
    const dispatch = useDispatch();
    const likedVideos = useSelector((state) => state.like?.likedVideos);
    const loading = useSelector((state) => state.like.loading);

    useEffect(() => {
        dispatch(getLikedVideos());
    }, [dispatch]);

    if (loading) {
        return <HomeSkeleton />;
    }

    if (likedVideos?.length == 0) {
        return <NoVideosFound />
    }

    return (
        <>
            <div className="container">
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 text-white mb-20 sm:mb-0">
                    {likedVideos?.map((video) => (
                        <Link
                            href={`/watch/${video.likedVideo._id}`}
                            key={video.likedVideo._id}
                        >
                            <VideoList
                                avatar={
                                    video.likedVideo.ownerDetails?.avatar?.url
                                }
                                duration={video.likedVideo.duration}
                                title={video.likedVideo.title}
                                thumbnail={video.likedVideo.thumbnail?.url}
                                createdAt={video.likedVideo.createdAt}
                                views={video.likedVideo.views}
                                channelName={video.likedVideo.ownerDetails?.username}
                            />
                        </Link>
                    ))}
                </div>
          </div>
        </>
    );
}

export default LikedVideos;