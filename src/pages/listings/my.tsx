import { type NextPage } from "next";
import Head from "next/head";
import { ShowMyListings } from "@components/showMyListings";

const My: NextPage = () => {
    return (
        <>
            <Head>
                <title>Social Platform</title>
                <meta name="description" content="Created for nwHacks 2023" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex grow flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
                {/*container for a bunch of volunteer listings*/}
                <div className="text-white">
                    <ShowMyListings />
                </div>
            </main>
        </>
    );
};

export default My;
