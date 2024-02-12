"use client"
import React, { useEffect } from "react";
import { ChannelHeader, ChannelNavigate } from "../../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { userChannelProfile } from "../../../store/Slices/userSlice";


function Channel({params}) {
    const dispatch = useDispatch();
    const { username } = params;

    const channel = useSelector((state) => state.user?.profileData);
    useEffect(() => {
        dispatch(userChannelProfile(username));
    }, [dispatch, username]);

    // window.scrollTo(0, 0);


    return (
        <>
            {channel && (
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
            )}
            <ChannelNavigate username={username} />
            <div className="overflow-y-scroll h-[32rem] sm:h-96 mb-20 sm:mb-0">
               <h4>Outlet</h4>
            </div>
        </>
    );
}

export default Channel;