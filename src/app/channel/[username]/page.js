"use client"

import React, { useEffect } from "react";
import { ChannelHeader } from "../../../components/index.js";
import  {ChannelNavigate}  from "../../../components/index.js";
import { useDispatch, useSelector } from "react-redux";
import { userChannelProfile } from "../../../store/Slices/userSlice.js";
import { useParams } from "next/navigation.js";




function Channel() {
    const dispatch = useDispatch();
    const { username } = useParams();

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
                coverImage={channel?.coverImage}
                avatar={channel?.avatar}
                subscribedCount={channel?.channelsSubscribedToCount}
                fullName={channel?.fullName}
                subscribersCount={channel?.subcribersCount}
                isSubscribed={channel?.isSubscribed}
                channelId={channel?._id}
            />
            }
            <ChannelNavigate username={username} />
            <div className="overflow-y-scroll h-[32rem] sm:h-96 mb-20 sm:mb-0">
                <h2>Outlet</h2>
            </div>
        </>
    );
}

export default Channel;