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
            <br /> <p className='glowing-text'>&lt;Welcome to ShelfSaver!&gt;</p> <br />
		    <Search details={initialDetails}/>
        </>
    );
}
