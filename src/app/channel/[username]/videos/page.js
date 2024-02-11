"use client"
import React, { useEffect } from "react";
import { NoVideosFound, VideoList } from "../../../../components/index.js";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideos } from "../../../../store/Slices/videoSlice.js";
import Link from "next/link.js";


function ChannelVideos() {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.user?.profileData?._id);
    const videos = useSelector((state) => state.video?.videos?.docs);

    useEffect(() => {
        dispatch(getAllVideos(userId));
    }, [dispatch, userId]);

    if (videos?.length == 0) {
        return <NoVideosFound />
    }
    
    return (
        <>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 text-white">
                {videos?.map((video) => (
                    <Link
                        href={`/watch/${video._id}`}
                        key={video._id}
                    >
                        <VideoList
                            avatar={video.avatar?.url}
                            duration={video.duration}
                            title={video.title}
                            thumbnail={video.thumbnail?.url}
                            createdAt={video.createdAt}
                            views={video.views}
                        />
                    </Link>
                ))}
            </div>
        </>
    );
}

export default ChannelVideos;