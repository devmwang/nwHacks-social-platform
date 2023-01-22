/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from "react-hook-form";
import { api } from "@utils/api";
import React from "react";
import axios from "axios";

interface FormValues {
    image: File;
    caption: string;
}

const CreateNewPost = () => {
    const { register, handleSubmit } = useForm<FormValues>();

    const createPost = api.posts.createPost.useMutation();

    const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length <= 0) return;

        const file = e.target.files[0];

        const res = await fetch("/api/upload-image");

        const formData = new FormData();
        formData.append("file", file as any);

        const url = ((await res.json()) as any).url[0];

        await axios.put(url, formData);
    };

    return (
        <div className="grow bg-gradient-to-b from-[#2e026d] to-[#15162c]">
            <div className="flex h-full p-16">
                <div className="grow rounded-lg bg-gray-700 p-8 text-center text-white">
                    <span className="py-4 text-4xl font-semibold">Create New Post</span>
                    <div className="mt-16">
                        <form
                            onSubmit={handleSubmit(async (data) => {
                                await createPost.mutateAsync(data);
                            })}
                            className="flex flex-col"
                        >
                            <div className="flex grow justify-center">
                                <div className="relative inline-block h-48 w-48 cursor-pointer rounded-full border-4">
                                    <input
                                        className="absolute left-0 bottom-0 h-full w-full cursor-pointer opacity-0"
                                        type="file"
                                        accept="image/png, image/jpeg"
                                        onChange={uploadImage}
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-46 w-46 mt-1"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="pt-2 pb-4">Select file</div>
                            <div>
                                <input className="" placeholder="Caption" type="text" {...register("caption")} />
                            </div>
                            <button className="py-4" disabled={createPost.isLoading} type="submit">
                                {createPost.isLoading ? <span>Posting...</span> : <span>Post</span>}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateNewPost;
