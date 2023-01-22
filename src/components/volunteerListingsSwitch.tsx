import Navbaritem from "@components/navbarItem";

import { api } from "@utils/api";

export default function VolunteerListingSwitch() {
    const user = api.user.getUser.useQuery();

    return (
        <>
            {!!user.data && user.data.role !== "ORGANIZATION" ? (
                <Navbaritem
                    input={"Volunteer"}
                    url={"/volunteer"}
                    svg={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-6 w-6">
                            <path
                                fillRule="evenodd"
                                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                clipRule="evenodd"
                            />
                        </svg>
                    }
                />
            ) : (
                <Navbaritem
                    input={"Listings"}
                    url={"/listings"}
                    svg={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-6 w-6">
                            <path
                                fillRule="evenodd"
                                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                clipRule="evenodd"
                            />
                        </svg>
                    }
                />
            )}
        </>
    );
}
