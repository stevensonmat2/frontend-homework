import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get('https://thronesapi.com/api/v2/Characters')
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Navbar characters={characters} />
    </>
  );
}