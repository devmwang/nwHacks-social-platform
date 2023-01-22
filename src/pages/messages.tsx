import { type NextPage } from "next";
import Head from "next/head";

const Messages: NextPage = () => {
    return (
        <>
            <Head>
                <title>Social Platform</title>
                <meta name="description" content="Created for nwHacks 2023" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <p>ooga booga some text for messages page</p>
            <main className="flex grow flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]"></main>
        </>
    );
};

export default Messages;
