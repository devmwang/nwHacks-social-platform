import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "../utils/api";

export const Authbutton: React.FC = () => {
    const { data: sessionData } = useSession();

    const { data: secretMessage } = api.auth.getSecretMessage.useQuery(
        undefined, // no input
        { enabled: sessionData?.user !== undefined }
    );

    return (
        <div className="flex flex-col items-center justify-center">
            <button
                className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
                onClick={sessionData ? () => void signOut() : () => void signIn("google")}
            >
                {sessionData ? "Sign out" : "Sign in"}
            </button>
        </div>
    );
};
