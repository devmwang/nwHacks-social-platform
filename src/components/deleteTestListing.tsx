import { api } from "@utils/api";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

interface FormValues {
    id: string;
}

export default function DeleteTestListing() {
    const { register, handleSubmit } = useForm<FormValues>();

    const mutation = api.listings.deleteListing.useMutation();
    const router = useRouter();

    return (
        <div>
            <form
                onSubmit={handleSubmit((data) => {
                    const id = data.id;
                    mutation.mutate({ id });
                    router.reload();
                })}
                className="flex flex-row"
            >
                <div>
                    <input className="text-black" placeholder="id" type="text" {...register("id")} />
                </div>
                <button className="px-4" type="submit">
                    Delete listing
                </button>
            </form>
        </div>
    );
}
