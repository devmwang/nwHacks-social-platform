import Navbaritem from "./navbaritem";

export default function Layout() {
  return (
    <>
      <div>
        <Navbaritem input={"Home"} />
      </div>
      <p className="bg-white dark:bg-slate-800 px-6 py-8 ring-1 ring-slate-900/5 shadow-xl text-slate-500 dark:text-slate-400 text-sm">ooga booga</p>
    </>
  )
}