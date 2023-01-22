import { api } from "@utils/api";

export function ShowListings() {
    const listings = api.listings.getRecentListings.useQuery({ limit: 10 });

    if (listings.data == null) {
        return <div></div>;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const listItems = listings.data.map((listing) => (
        <li className="list-none py-1" key={listing.tsPosted}>
            <div className="rounded-xl bg-slate-900 px-12">
                <p className="text-2xl">{listing.title}</p>
                <p>{listing.id}</p>
                <p>{listing.description}</p>
                <p>{listing.location}</p>
                <p>{listing.startTime.toString()}</p>
                <p>{listing.endTime.toString()}</p>
            </div>
        </li>
    ));

    return <div>{listItems}</div>;
}
