import { useParams } from "react-router";

export default function User() {
    let { uid, role, location } = useParams();

    return (
        <>
            <p>User UID: {uid}</p>
            {role}
            Location: {location}
        </>
    );
}
