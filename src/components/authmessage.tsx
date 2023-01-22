import { useSession } from "next-auth/react";

export const Authmessage: React.FC = () => {
    const { data: sessionData } = useSession();

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-lg text-white">
                {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
            </p>
        </div>
    );
};
