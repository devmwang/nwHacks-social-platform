import { type NextPage } from "next";
import Head from "next/head";

import Layout from "../components/layout";

const Home: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Social Platform</title>
                <meta name="description" content="Created for nwHacks 2023" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]"></main>
        </Layout>
    );
};

export default Home;
