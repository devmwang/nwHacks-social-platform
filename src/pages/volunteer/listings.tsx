import { type NextPage } from "next";
import Head from "next/head";
import { ShowListings } from "@components/showListings";
import { MakeTestListing } from "@components/makeTestListing";
import DeleteTestListing from "@components/deleteTestListing";

const Listings: NextPage = () => {
    return (
        <>
            <Head>
                <title>Social Platform</title>
                <meta name="description" content="Created for nwHacks 2023" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <MakeTestListing />
                <DeleteTestListing />
            </div>
            <main className="flex grow flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
                {/*container for a bunch of volunteer listings*/}
                <div className="text-white">
                    <ShowListings />
                </div>
            </main>
        </>
    );
};

export default Listings;
