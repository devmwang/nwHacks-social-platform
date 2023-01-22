import { api } from "@utils/api";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export function MakeTestListing() {
    const mutation = api.listings.createListing.useMutation();

    const { data: sessionData } = useSession();
    const router = useRouter();

    if (sessionData == null || sessionData?.user == null) {
        return (
            <div>
                <p>not logged in</p>
            </div>
        );
    }

    const handleClick = () => {
        const title = "test title";
        const description = "test description";
        const location = "test location";
        const startTime = "01/21/2023";
        const endTime = "03/21/2023";
        const userId = sessionData!.user!.id;
        mutation.mutate({ title, description, location, startTime, endTime, userId });
        router.reload();
    };

    return (
        <div>
            <button onClick={handleClick} disabled={mutation.isLoading}>
                Make test listing
            </button>

            {mutation.error && <p>{mutation.error.message}</p>}
        </div>
    );
}
