"use client"

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getVideoById } from "../../../store/Slices/videoSlice.js";
import { CommentsList, TweetAndComment, Video,Description } from "../../../components/index.js";

import { getVideoComments } from "../../../store/Slices/commentSlice.js";
import { useParams } from "next/navigation.js";




function VideoDetail() {
    const dispatch = useDispatch();
   
    const { videoId } = useParams();
    const userId = useSelector((state) => state.auth?.userData?._id);

    const video = useSelector((state) => state.video?.video);
    // const video = useSelector((state) => state.video);

    console.log(video)
    const comments = useSelector((state) => state.comment?.comments);
    const totalComments = useSelector((state) => state.comment?.totalComments);

    useEffect(() => {
        if (videoId && userId) {
            dispatch(getVideoById({ videoId, userId }));
            dispatch(getVideoComments({ videoId }));
        }
    }, [dispatch, videoId, userId]);

    return (
        <>
            <div className="">
                <Video
                    src={video?.videoFile?.url}
                    poster={video?.thumbnail?.url}
                />
            </div>
            <Description 
            //    avatar={video?.owner?.avatar.url}
                channelName={video?.owner?.username}
                createdAt={video?.createdAt}
                description={video?.description}
                isSubscribed={video?.owner?.isSubscribed}
                likesCount={video?.likesCount}
                subscribersCount={video?.owner?.subscribersCount}
                title={video?.title}
                views={video?.views}
                key={video?._id}
                isLiked={video?.isLiked}
                videoId={video?._id}
                channelId={video?.owner?._id}
            />
            <div className="text-white font-semibold sm:px-5 px-3">{totalComments} Comments</div>
            <TweetAndComment
                comment={true}
                videoId={video?._id}
            />
            <div className="w-full sm:max-w-4xl">
                {comments?.map((comment) => (
                    <CommentsList
                        key={comment?._id}
                        avatar={comment?.owner?.avatar?.url}
                        commentId={comment?._id}
                        content={comment?.content}
                        createdAt={comment?.createdAt}
                        fullName={comment?.owner?.fullName}
                        isLiked={comment?.isLiked}
                        likesCount={comment?.likesCount}
                        username={comment?.owner?.username}
                    />
                ))}
            </div>
        </>
    );
}

export default VideoDetail;