import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = 'ShelfSaver';

    // Fetch data from API endpoint with a GET request mapped in the Spring Boot controller
    const fetchData = async() => {
      try {
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
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  return (
    <>
      <p>Received &quot;{data}&quot; from Spring Boot backend</p>
    </>
  )
}

export default App
