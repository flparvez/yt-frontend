"use client"

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubscribedChannels } from "../../store/Slices/subscriptionSlice.js";
import Avatar from "../../components/Avatar.js";

import { VideoList } from "../../components/index.js";
import { Link } from 'next/link';

function MySubscriptions() {
    const dispatch = useDispatch();
    const subscriptions = useSelector(
        (state) => state.subscription?.mySubscriptions
    );
    const subscriberId = useSelector((state) => state.auth?.userData?._id);
    useEffect(() => {
        if (subscriptions) {
            dispatch(getSubscribedChannels(subscriberId));
        }
    }, [dispatch, subscriberId,subscriptions]);

    return (
        <>
            <div className="flex gap-2 p-2 text-white items-center bg-[#222222]">
                {subscriptions?.map((subscription) => (
                    <div key={subscription?.subscribedChannel?._id} className="flex flex-col items-center overflow-x-scroll">
                        <Avatar
                            src={subscription?.subscribedChannel?.avatar.url}
                            channelName={subscription?.subscribedChannel?.username}
                        />
                        <h5 className="text-xs">
                            {subscription?.subscribedChannel?.username}
                        </h5>
                    </div>
                ))}
            </div>

            <div className="text-white mb-20 sm:mb-0 w-full grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 overflow-y-scroll">
                {subscriptions?.map((subscription) => (
                    <link 
                        href= {`/watch/${subscription?.subscribedChannel?.latestVideo?._id}`}
                        key={subscription?.subscribedChannel?._id}
                    >
                        {subscription?.subscribedChannel?.latestVideo && (
                            <Link
                                to={`/watch/${subscription?.subscribedChannel?.latestVideo?._id}`}
                                key={subscription?.subscribedChannel?._id}
                            >
                                <VideoList
                                    avatar={
                                        subscription?.subscribedChannel?.avatar
                                            .url
                                    }
                                    duration={
                                        subscription?.subscribedChannel
                                            ?.latestVideo?.duration
                                    }
                                    title={
                                        subscription?.subscribedChannel
                                            ?.latestVideo?.title
                                    }
                                    thumbnail={
                                        subscription?.subscribedChannel
                                            ?.latestVideo?.thumbnail?.url
                                    }
                                    createdAt={
                                        subscription?.subscribedChannel
                                            ?.latestVideo?.createdAt
                                    }
                                    views={
                                        subscription?.subscribedChannel
                                            ?.latestVideo?.views
                                    }
                                    channelName={
                                        subscription?.subscribedChannel
                                            ?.username
                                    }
                                />
                            </Link>
                        )}
                    </link>
                ))}
            </div>
        </>
    );
}

export default MySubscriptions;