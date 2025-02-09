import { useParams } from "react-router";
import { DisplayAllItems } from "./Item";
import Search from './Search';
import initialDetails from './Items';

export default function User() {
    let { uid } = useParams();

    let role = "Supermarket (Seller)";
    let location = "Raleigh, NC";
    return (
        <>
            <p>User UID: {uid}</p>
            {role}
            Location: {location}
            Available Items: {DisplayAllItems}
		    <Search details={initialDetails}/>

            <p>{role}</p>
            <p>Location: {location}</p>
            <p>Available Items: {DisplayAllItems}</p>
        </>
    );
}
