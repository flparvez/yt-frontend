"use client"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLikedVideos } from "../../store/Slices/likeSlice";
import HomeSkeleton from "../../skeleton/HomeSkelton";
import {  NoVideosFound, VideoList } from "../../components/index";

function LikedVideos() {
    const dispatch = useDispatch();
    const likedVideos = useSelector((state) => state.like?.likedVideos);
    const loading = useSelector((state) => state.like.loading);
    // window.scrollTo(0, 0);

 
    
    useEffect(() => {
        dispatch(getLikedVideos());
    }, [dispatch]);

    if (loading) {
        return <HomeSkeleton />;
    }

    if (likedVideos?.length == 0) {
        return <NoVideosFound />;
    }

    return (
        <>
            <div className="container"> 
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 text-white mb-20 sm:mb-0">
                    {likedVideos?.map((video) => (
                        <VideoList
                            key={video.likedVideo._id}
                            avatar={video.likedVideo.ownerDetails?.avatar}
                            duration={video.likedVideo.duration}
                            title={video.likedVideo.title}
                            thumbnail={video.likedVideo.thumbnail?.url}
                            createdAt={video.likedVideo.createdAt}
                            views={video.likedVideo.views}
                            channelName={
                                video.likedVideo.ownerDetails?.username
                            }
                            videoId={video.likedVideo._id}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default LikedVideos;