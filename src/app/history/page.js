"use client"
import React, { useEffect } from "react";
import {  NoVideosFound, VideoList } from "../../components/index.js";

import { useDispatch, useSelector } from "react-redux";
import { getWatchHistory } from "../../store/Slices/userSlice.js";
import HomeSkeleton from "../../skeleton/HomeSkelton.js"
import { Link } from 'next/link';
function History() {
    const loading =  useSelector((state) => state.user?.loading);
    const videos = useSelector((state) => state.user?.history);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWatchHistory());
    }, [dispatch]);

    if (loading) {
        return <HomeSkeleton />
    }

    if (videos?.length == 0) {
        return <NoVideosFound />
    }

    if (videos && videos.length > 0) {
        return (
            <>
                <div className="container">
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 text-white">
                        {videos.map((video) => (
                            <link
                                href={`/watch/${video._id}`}
                                key={video._id}
                            >
                                <VideoList
                                    avatar={video.owner?.avatar.url}
                                    duration={video.duration}
                                    title={video.title}
                                    thumbnail={video.thumbnail?.url}
                                    createdAt={video.createdAt}
                                    views={video.views}
                                    channelName={video.owner.username}
                                />
                            </link>
                        ))}
                    </div>
                </div>
            </>
        );
    }
    return <></>;
}

export default History;