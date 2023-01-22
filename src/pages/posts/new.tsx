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
                <div className="grow rounded-lg bg-gray-700 p-8 text-center">
                    <span className="py-4 text-4xl font-semibold text-white">Create New Post</span>
                    <div>
                        <form
                            onSubmit={handleSubmit(async (data) => {
                                await createPost.mutateAsync(data);
                            })}
                            className="flex flex-col"
                        >
                            <div>
                                <input className="" type="file" accept="image/png, image/jpeg" onChange={uploadImage} />
                            </div>
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
