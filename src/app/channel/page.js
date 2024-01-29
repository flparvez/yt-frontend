"use client"
import React, { useEffect } from "react";
import { ChannelHeader } from "../../components/ChannelHeader.js";
import { useDispatch, useSelector } from "react-redux";
import { userChannelProfile } from "../../store/Slices/userSlice.js";
import ChannelNavigate from "../../components/channelNavigate.js";
import { useParams } from "next/navigation.js";
// import { Outlet, useParams } from "react-router-dom";

function Channel() {
    const dispatch = useDispatch();
    const params = useParams()
    const { username } = params

    const channel = useSelector((state) => state.user?.profileData);
    useEffect(() => {
        dispatch(userChannelProfile(username));
    }, [dispatch, username]);

    return (
        <>
            {
                channel &&
                <ChannelHeader
                username={username}
                coverImage={channel?.coverImage.url}
                avatar={channel?.avatar.url}
                subscribedCount={channel?.channelsSubscribedToCount}
                fullName={channel?.fullName}
                subscribersCount={channel?.subcribersCount}
                isSubscribed={channel?.isSubscribed}
                channelId={channel?._id}
            />
            }
            <ChannelNavigate username={username} />
            <div className="overflow-y-scroll h-[32rem] sm:h-96 mb-20 sm:mb-0">
                <h2>This is outlet</h2>
            </div>
        </>
    );
}

export default Channel;