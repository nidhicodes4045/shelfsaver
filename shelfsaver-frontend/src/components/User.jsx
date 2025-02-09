import { useParams } from "react-router";
import { DisplayAllItems } from "./Item";

export default function User() {
    let { uid } = useParams();

    let role = "Supermarket (Seller)";
    let location = "Raleigh, NC";
    return (
        <>
            <p>User UID: {uid}</p>
            <p>{role}</p>
            <p>Location: {location}</p>
            <p>Available Items: {DisplayAllItems}</p>
        </>
    );
}
