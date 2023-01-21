import Navbaritem from "./navbaritem";

export default function Layout() {
    return (
        <>
            <div className="bg-slate-800 py-4 px-4 shadow-xl">
                <div className="flex flex-row-reverse">
                    {/*reversed because i couldnt figure out how to align end hee hee xd*/}
                    <Navbaritem
                        input={"Volunteer"}
                        url={"localhost:3000"}
                        svg_path={
                            "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        }
                    />
                    <Navbaritem
                        input={"Home"}
                        url={"localhost:3000"}
                        svg_path={
                            "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        }
                    />
                </div>
            </div>
        </>
    );
}
