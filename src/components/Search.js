"use client"
import React from "react";
import Input from "../components/Input";
import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { getAllVideos } from "../store/Slices/videoSlice";
import { useRouter } from "next/navigation";

function Search() {
    const { register, handleSubmit } = useForm();
    const navigate = useRouter();
    const dispatch = useDispatch();

    const search = (data) => {
        const query = data?.query;
        navigate.push(`/search/${query}`);
        dispatch(getAllVideos({ query }));
    };

    return (
        <>
            <form onSubmit={handleSubmit(search)}>
                <Input
                    placeholder="Search"
                    {...register("query")}
                />
            </form>
        </>
    );
}

export default Search;