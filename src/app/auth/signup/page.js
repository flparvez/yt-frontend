"use client"
import React from "react";

import { useForm } from "react-hook-form";

import { getCurrentUser, createAccount } from "../../../store/Slices/authSlice.js";
import {Input, Logo} from '../../../components/index.js'
import { useDispatch } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/navigation.js";


function SignUp() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();
    const navigate = useRouter();
    const dispatch = useDispatch();

    const submit = async (data) => {
        dispatch(createAccount(data));
        navigate.push('/login');
    };

    return (
        <>
            <div className="w-full h-screen text-black dark:text-white  p-3 flex justify-center items-start sm:mt-8">
                <div className="flex max-w-5xl flex-col space-y-5 justify-center items-center border border-slate-600 p-3">
                    <div className="flex items-center gap-2 mt-5">
                        <Logo />
                    </div>
                    <form
                        onSubmit={handleSubmit(submit)}
                        className="space-y-5 p-2"
                    >
                        <Input className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            label="Username: "
                            type="text"
                            placeholder="Username"
                            {...register("username", {
                                required: true,
                            })}
                        />
                        {errors.username && (
                            <span className="text-white">
                                {errors.username.message}
                            </span>
                        )}
                        <Input className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            label="Email: "
                            type="email"
                            placeholder="Email"
                            {...register("email", {
                                required: true,
                            })}
                        />
                        {errors.email && (
                            <span className="text-white">
                                {errors.email.message}
                            </span>
                        )}
                        <Input className="mt-1 text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            label="Fullname: "
                            type="text"
                            placeholder="Fullname"
                            {...register("fullName", {
                                required: true,
                            })}
                        />
                        {errors.fullname && (
                            <span className="text-white">
                                {errors.fullname.message}
                            </span>
                        )}
                        <Input className="mt-1 text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            label="Password: "
                            type="password"
                            placeholder="Password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        {errors.password && (
                            <span>{errors.password.message}</span>
                        )}
                        <Input className="mt-1 text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            label="Profile Picture: "
                            type="file"
                            placeholder=""
                            {...register("avatar", {
                                required: true,
                            })}
                            accept="image/png, image/jpeg"
                        />
                        {errors.password && (
                            <span>{errors.avatar.message}</span>
                        )}

                        <button
                            type="submit"
                            bgColor="bg-purple-500"
                            className="w-full sm:py-3 py-2 hover:bg-purple-700 text-lg"
                        >
                            Signup
                        </button>

                        <p className="text-center text-sm">
                            Already have an account?{" "}
                            <Link
                                href={"/auth/login"}
                                className="text-purple-600 cursor-pointer hover:opacity-70"
                            >
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUp;