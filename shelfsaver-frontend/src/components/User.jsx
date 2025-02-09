import { useParams } from "react-router";

export default function User() {
    let { uid } = useParams();

    return <p>User UID: {uid}</p>;
}
