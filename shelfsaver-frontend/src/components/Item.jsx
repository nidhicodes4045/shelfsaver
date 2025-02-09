import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ReactSearchBox from "react-search-box";
import axios from 'axios';
import '../assets/styles/ItemForm.css';
import Login from '../Login';

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
            <button onClick={addItemToShoppingCart}>Add to Shopping Cart</button>
            <button onClick={removeItemFromShoppingCart}>Remove from Shopping Cart</button>
        </div>
    );
}

ShoppingCartDisplay.propTypes = {
    cartItems: PropTypes.element
}

export function ShoppingCartDisplay(props) {
    return (
        <>
        {
            props.cartItems.map(function(item) {
                <ItemDisplay name={item.name} price={item.price} quantity={item.quantity} />
            })
        }
        </>
    );
}

/**
 * This function is used by users with the 'Buyer' role only
 * @param {*} item 
 */
async function addItemToShoppingCart(item) {
    try {
        await axios.post('http://localhost:8080/api/shoppingCart', {item});
        alert('Item successfully added to your shopping cart!');
    } catch (error) {
        console.log('Error adding item to shopping cart: ', error);
    }
}

/**
 * This function is used by users with the 'Buyer' role only
 * @param {*} id
 */
async function removeItemFromShoppingCart(id) {
    try {
        await axios.delete(`http://localhost:8080/api/shoppingCart/${id}`);
        alert('Item successfully removed from your shopping cart!');
    } catch (error) {
        console.log('Error removing item from shopping cart: ', error);
    }
}

/**
 * This function is used by users with the 'Seller' role only
 * @param {*} item 
 */
async function addItem(item) {
    try {
        await axios.post('http://localhost:8080/api/items', { item });
        alert('Item successfully added to database!');
    } catch (error) {
        console.error('Error creating data: ', error);
    }
}

/**
 * This function is used by users with the 'Seller' role only
 * @param {*} id 
 * @param {*} updatedItem 
 */
async function editItem(id, updatedItem) {
    try {
        await axios.put(`http://localhost:8080/api/items/${id}`, { updatedItem });
        alert('Item successfully edited in database!');
    } catch (error) {
        console.error('Error editing data: ', error);
    }
}

/**
 * This function is used by users with the 'Seller' role only
 * @param {*} id 
 */
async function removeItem(id) {
    try {
        await axios.delete(`http://localhost:8080/api/items/${id}`);
        alert('Item successfully deleted from database!');
    } catch (error){
        console.error('Error deleting data: ', error);
    }
}

ItemFormSubmitButton.propTypes = {
    method: PropTypes.string,
    buttonText: PropTypes.string,
    id: PropTypes.string,
    item: PropTypes.node
}

function ItemFormSubmitButton(props) {
    // Event listener for the button, calls the respective async function
    function handleClick() {
        if (props.method === "add") {
            addItem(props.item);
        }
        else if (props.method === "edit") {
            editItem(props.id, props.item);
        }
        else if (props.method === 'delete') {
            removeItem(props.id);
        }
    }
    return (
        <>
            <button type='submit' onClick={handleClick(props.method)} className='item-form-button'>
                <p>{String(props.buttonText)}</p>
            </button>
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
 * Creates a form that calls the respective async functions to interact with the API to edit the items database
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
	const [showItemForm, setShowItemForm] = useState(false);

	if (showItemForm) {
		return <Login/>
	}

    return (
        <>
            <button onClick={() => setShowItemForm(true)}>Back to Login</button>
            <ReactSearchBox placeholder='Search for items' value='search'/>
            <form onSubmit={createItem}>
                <fieldset>
                <p>Add an Item:</p>
                    <div className='input-container'>
                        <section>
                            <label htmlFor='name'>Name</label>
                            <input type='text' name='name' id='name' autoComplete='off' required></input>
                        </section>
                        <section>
                            <label htmlFor='price'>Price</label>
                            <input type='number' name='price' id='price' autoComplete='off' required></input>
                        </section>
                        <section>
                            <label htmlFor='quantity'>Quantity</label>
                            <input type='number' name='quantity' id='quantity' autoComplete='off' required></input>
                        </section>
                        <section>
                            {/* Expiration date should only be in the future, not the past */}
                            <label htmlFor='expiration'>Expiration Date</label>
                            <input type='date' name='expiration' id='expiration' min={minDate} autoComplete='off' required></input>
                        </section>
                        <section>
                            <label htmlFor='description'>Description</label>
                            <input type='text' name='description' id='description' autoComplete='off' required></input>
                        </section>
                    </div>
                    <ItemFormSubmitButton method="add" buttonText="Add" id={id} item={item}/>
                    <ItemFormSubmitButton method="edit" buttonText="Edit" id={id} item={item}/>
                    <ItemFormSubmitButton method="delete" buttonText="Delete" id={id} item={item}/>
                </fieldset>
            </form>
        </>
    )
}

/**
 * Fetches all items from the items database with an API call and displays them each in their own card
 * @returns 
 */
export function DisplayAllItems() {
    const [itemsList, setItemsList] = useState(null);

    useEffect(() => {
        document.title = 'ShelfSaver';
    
        // Fetch data from API endpoint with a GET request mapped in the Spring Boot controller
        const fetchData = async() => {
          try {
            // Set a timeout for 1000ms (1s) before fetching the data so that users get to see my beautiful loading screen <3
            await new Promise(resolve => setTimeout(resolve, 1000));
    
            const response = await fetch('http://localhost:8080/api/getItems');
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.data();
            setItemsList(data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);

    return (
        <div>
        {
        itemsList.map(function(item) {
            <ItemDisplay name={item.name} price={item.price} description={item.description} expiration={item.expiration} quantity={item.quantity}/>
        })
        }
        </div>
    );
}
