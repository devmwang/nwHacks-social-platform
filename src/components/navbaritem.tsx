import Link from "next/link";

export default function Layout({ input, url, svg_path }: { input: string; url: string; svg_path: string }) {
    return (
        <Link href={url}>
            <div className="grid place-items-center bg-slate-800 px-6 py-6 shadow-xl">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="h-6 w-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d={svg_path} />
                </svg>
                <h3 className="mt-5 text-base font-medium tracking-tight text-white">{input}</h3>
            </div>
        </Link>
    );
}
