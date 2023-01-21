export default function Layout({ input }: { input: string }) {
    return (
        <>
            <div className="rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800">
                <div>
                    <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
                        <svg
                            className="h-6 w-6 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        ></svg>
                    </span>
                </div>
                <h3 className="mt-5 text-base font-medium tracking-tight text-slate-900 dark:text-white">
                    Writes Upside-Down
                </h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{input}</p>
            </div>
        </>
    );
}
