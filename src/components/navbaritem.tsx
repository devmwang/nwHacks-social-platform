import Link from "next/link";

export default function Layout({ input, url, svg }: { input: string; url: string; svg: any }) {
    return (
        <Link href={url}>
            <div className="grid place-items-center bg-slate-800 px-2 py-2 shadow-xl">
                {svg}
                <h3 className="text-base font-medium tracking-tight text-white">{input}</h3>
            </div>
        </Link>
    );
}
