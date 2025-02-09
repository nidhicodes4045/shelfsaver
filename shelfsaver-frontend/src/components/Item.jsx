import PropTypes from 'prop-types';
import { useState } from 'react';
import axios from 'axios';

ItemDisplay.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    expiration: PropTypes.instanceOf(Date),
    quantity: PropTypes.number,
}

/**
 * Display the item and its details within a card
 * @param {*} props 
 * @returns 
 */
export function ItemDisplay(props) {
    return (
        <div className='item-card'>
            <h3>{props.name}</h3>
            <p>Price: ${props.price}</p>
            <p>Quantity: {props.quantity}</p>
            <p>Expires: {props.expiration}</p>
            <p>Description: {props.description}</p>
        </div>
    );
}

async function addItem(item) {
    try {
        await axios.post('http://localhost:8080/api/items', { item });
        alert('Item successfully added!');
    } catch (error) {
        console.error('Error creating data: ', error);
    }
}

async function editItem(id, updatedItem) {
    try {
        await axios.put(`http://localhost:8080/api/items/${id}`, { updatedItem });
        alert('Item successfully edited!');
    } catch (error) {
        console.error('Error editing data: ', error);
    }
}

async function removeItem(id) {
    try {
        await axios.delete(`http://localhost:8080/api/items/${id}`);
        alert('Item successfully deleted!');
    } catch (error){
        console.error('Error deleting data: ', error);
    }
}

function ItemFormSubmitButton(method, type, id, item) {
    // Event listener for the button, calls the respective async function
    function handleClick() {
        if (method === "add") {
            addItem(item);
        }
        else if (method === "edit") {
            editItem(id, item);
        }
        else if (method === 'delete') {
            removeItem(id);
        }
    }
    return (
        <>
            <button onClick={handleClick(method)} className='button'>{type}</button>
        </>
    )
}

class Item {
    constructor(id, name, price, quantity, expiration, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.expiration = expiration;
        this.description = description;
    }
}

/**
 * 
 * @returns 
 */
export function ItemForm() {
    const [item, setItem] = useState(null);
    const [id, setId] = useState("");

    // Get the current date
    const currentDate = new Date();
    // Format it so that month and day will always be 2 digits with leading 0 if necessary
    let year = currentDate.getFullYear();
    let month = new Intl.DateTimeFormat('en-US', { month: '2-digit' }).format(currentDate);
    let day = new Intl.DateTimeFormat('en-US', { day: '2-digit' }).format(currentDate);
    // Create a String to follow input date format
    let minDate = year + '-' + month + '-' + day;

    function createItem(id, name, price, quantity, expiration, description) {
        let myItem = new Item(id, name, price, quantity, expiration, description);
        setId(myItem.id);
        setItem(myItem);
    }

    return (
        <>
            <form onSubmit={createItem}>
                <fieldset>
                <p>Add an Item:</p>
                    <div className='input-container'>
                        <section>
                            <label>Name</label>
                            <input type='text' name='name' required></input>
                        </section>
                        <section>
                            <label>Price</label>
                            <input type='number' name='price' required></input>
                        </section>
                        <section>
                            <label>Quantity</label>
                            <input type='number' name='quantity' required></input>
                        </section>
                        <section>
                            {/* Expiration date should only be in the future, not the past */}
                            <label>Expiration Date</label>
                            <input type='date' name='expiration' min={minDate} required></input>
                        </section>
                        <section>
                            <label>Description</label>
                            <input type='text' name='description' required></input>
                        </section>
                    </div>
                </fieldset>
                <ItemFormSubmitButton method="add" type="Add" id={id} item={item}/>
                <ItemFormSubmitButton method="edit" type="Edit" id={id} item={item}/>
                <ItemFormSubmitButton method="delete" type="Delete" id={id} item={item}/>
            </form>
        </>
    )
}
