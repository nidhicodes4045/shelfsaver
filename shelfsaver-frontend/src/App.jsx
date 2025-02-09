import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Loading from './components/Loading';
import './App.css'
import { ItemForm } from './components/Item';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Code to run when App component is first mounted onto the DOM
  useEffect(() => {
    document.title = 'ShelfSaver';

    // Fetch data from API endpoint with a GET request mapped in the Spring Boot controller
    const fetchData = async() => {
      try {
        // Set a timeout for 1000ms (1s) before fetching the data so that users get to see my beautiful loading screen <3
        await new Promise(resolve => setTimeout(resolve, 1000));

        const response = await fetch('http://localhost:8080/api/test');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const dataTest = await response.text();
        setData(dataTest);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <Loading/>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  return (
    <>
      <h3 className='glowing-text'>ShelfSaver</h3>
      <img src='src/assets/wizard.png' height={300}></img>
      <ItemForm/>
      <p>Received &quot;{data}&quot; from Spring Boot backend</p>
      <Button text="Hello, World"/>
    </>
  )
}

export default App
