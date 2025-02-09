import { useParams } from "react-router";
import { DisplayAllItems } from "./Item";

export default function User() {
    let { uid, role, location } = useParams();

    return (
        <>
            <p>User UID: {uid}</p>
            {role}
            Location: {location}
            Available Items: {DisplayAllItems}
        </>
    );
}
