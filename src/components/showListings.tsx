import { api } from "@utils/api";

export function ShowListings() {
    const listings = api.listings.getRecentListings.useQuery({ limit: 10 });

    if (listings.data == null) {
        return <div></div>;
    }

    const listItems = listings.data.map((listing) => (
        <li className="list-none py-1" key={(listing.dtPosted as any).toString()}>
            <div className="rounded-xl bg-slate-900 px-12">
                <p className="text-2xl">{listing.title}</p>
                <p>{listing.id}</p>
                <p>{listing.description}</p>
                <p>{listing.location}</p>
                <p>{(listing.startTime as any).toString()}</p>
                <p>{(listing.endTime as any).toString()}</p>
            </div>
        </li>
    ));

    return <div>{listItems}</div>;
}
