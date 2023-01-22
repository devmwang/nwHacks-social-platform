import { api } from "@utils/api";

export function ShowMyListings() {
    const listings = api.listings.getMyListings.useQuery({ limit: 10 });

    if (listings.data == null) {
        return <div></div>;
    }

    const listItems = listings.data.map((listing) => (
        <li className="list-none" key={(listing.dtPosted as any).toString()}>
            <div className="flex max-w-prose flex-row rounded-lg bg-slate-800">
                <div className="rounded-lg bg-slate-900 shadow-lg">
                    <p className="text-4xl">{listing.title}</p>
                    <p className="text-sm">{listing.location}</p>
                    <p className="text-lg">Starts: {(listing.startTime as any).toLocaleDateString()}</p>
                    <p className="text-lg">Ends: {(listing.endTime as any).toLocaleDateString()}</p>
                </div>
                <div>
                    <p>{listing.id}</p>
                    <p className="break-normal">{listing.description}</p>
                </div>
            </div>
        </li>
    ));

    return <div>{listItems}</div>;
}
