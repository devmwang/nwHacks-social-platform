import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Social Platform</title>
                <meta name="description" content="Created for nwHacks 2023" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex grow flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]"></main>
        </>
    );
};

export default Home;
