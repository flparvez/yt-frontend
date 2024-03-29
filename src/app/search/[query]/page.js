"use client"
import React from "react";
import { useSelector } from "react-redux";
import { NoVideosFound, VideoList } from "../../../components/index";
import HomeSkeleton from "../../../skeleton/HomeSkelton";

function SearchVideos() {
    const loading = useSelector((state) => state.video?.loading);
    const videos = useSelector((state) => state.video?.videos);

    if (videos?.totalDocs === 0) {
        return <NoVideosFound text={"Try searching something else"} />;
    }

    if (loading) {
        return <HomeSkeleton />;
    }

    return (
        <>
            <div className="grid grid-cols-3 text-white">
                {videos &&
                    videos?.docs?.map((video) => (
                        <VideoList
                            key={video?._id}
                            thumbnail={video?.thumbnail?.url}
                            duration={video?.duration}
                            title={video?.title}
                            views={video?.views}
                            avatar={video?.ownerDetails?.avatar}
                            channelName={video?.ownerDetails?.username}
                            createdAt={video?.createdAt}
                            videoId={video?._id}
                        ></VideoList>
                    ))}
            </div>
        </>
    );
}

export default SearchVideos;