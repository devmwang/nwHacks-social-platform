import { useForm } from "react-hook-form";
import { api } from "@utils/api";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface FormValues {
    title: string;
    description: string;
    location: string;
    startTime: string;
    endTime: string;
}

const CreateNewListing = () => {
    const { register, handleSubmit } = useForm<FormValues>();

    const createPost = api.listings.createListing.useMutation();
    const [startFirstDate, setStartFirstDate] = useState(new Date());
    const [startSecondDate, setStartSecondDate] = useState(new Date());

    return (
        <div className="grow bg-gradient-to-b from-[#2e026d] to-[#15162c]">
            <div className="flex h-full p-16">
                <div className="grow rounded-lg bg-gray-700 p-8 text-center text-black">
                    <span className="py-4 text-4xl font-semibold text-white">Create New Listing</span>
                    <div>
                        <form
                            onSubmit={handleSubmit(async (data) => {
                                data.startTime = startFirstDate.toString();
                                data.endTime = startSecondDate.toString();
                                await createPost.mutateAsync(data);
                            })}
                            className="flex flex-col"
                        >
                            <div>
                                <input className="" placeholder="Title" type="text" {...register("title")} />
                            </div>
                            <div>
                                <input
                                    className=""
                                    placeholder="Description"
                                    type="text"
                                    {...register("description")}
                                />
                            </div>
                            <div>
                                <input className="" placeholder="Location" type="text" {...register("location")} />
                            </div>
                            <div>
                                <DatePicker
                                    selected={startFirstDate}
                                    // @ts-ignore
                                    onChange={(date: React.SetStateAction<Date>) => setStartFirstDate(date)}
                                />
                            </div>
                            <div>
                                <DatePicker
                                    selected={startSecondDate}
                                    // @ts-ignore
                                    onChange={(date: React.SetStateAction<Date>) => setStartSecondDate(date)}
                                />
                            </div>
                            <button className="py-4" disabled={createPost.isLoading} type="submit">
                                Create listing
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateNewListing;
