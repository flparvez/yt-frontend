"use client"
import React from "react";

import { useForm } from "react-hook-form";

import { getCurrentUser, userLogin } from "../../../store/Slices/authSlice.js";

import { useDispatch, useSelector } from "react-redux";
// import LoginSkeleton from "../skeleton/loginSkeleton.jsx";
import Link from "next/link";
import { useRouter } from "next/navigation.js";


function Login() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();
    const navigate = useRouter();
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth?.loading);

    const submit = async (data) => {
        const isEmail = data.username.includes("@");
        const loginData = isEmail
            ? { email: data.username, password: data.password }
            : data;

        const response = await dispatch(userLogin(loginData));
        const user = await dispatch(getCurrentUser());
        if (user && response?.payload) {
            navigate.push("/");
        }
    };

    if (loading) {
        return <h2>Loading</h2>
    }

    return (
        <>
            <div className="w-full h-screen text-white p-3 flex justify-center items-start">
                <div className="flex max-w-5xl flex-col space-y-5 justify-center items-center border border-slate-600 p-3 mt-20">
                    <div className="flex items-center gap-2 mt-5">
                        <h2>Logo</h2>
                    </div>

                    <form
                        onSubmit={handleSubmit(submit)}
                        className="space-y-5 p-2"
                    >
                        <input  className="mt-1 text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                       
                            label="Username / email : "
                            type="text"
                            placeholder="example@gmail.com"
                            {...register("username", {
                                required: true,
                            })}
                        />
                        {errors.username && (
                            <span className="text-white">
                                {errors.username.message}
                            </span>
                        )}
                        <input  
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring text-black focus:ring-indigo-200 focus:ring-opacity-50"

                            label="Password: "
                            type="password"
                            placeholder="1kd074fjw0"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        {errors.password && (
                            <span>{errors.password.message}</span>
                        )}

                        <button
                            type="submit"
                            bgColor="bg-purple-500"
                            className="w-full sm:py-3 py-2 hover:bg-purple-700 text-lg"
                        >
                            Login
                        </button>

                        <p className="text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Link
                                href={"/auth/signup"}
                                className="text-purple-600 cursor-pointer hover:opacity-70"
                            >
                                SignUp
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;