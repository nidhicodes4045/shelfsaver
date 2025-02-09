import { useParams } from "react-router";
import { DisplayAllItems } from "./Item";
import Search from './Search';
import initialDetails from './Items';

export default function User() {
    let { uid, role, location } = useParams();

    return (
        <>
            <p>User UID: {uid}</p>
            {role}
            Location: {location}
            Available Items: {DisplayAllItems}
			<Search details={initialDetails}/>

        </>
    );
}
