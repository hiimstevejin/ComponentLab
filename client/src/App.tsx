import { useEffect } from "react";
import axios from "axios";

export default function App() {

  useEffect(() => {
    axios.get('http://localhost:3001/api/hello').then(res => {
      console.log(res.data.message);
    });
  }, []);
  
  return (
    <>
      <h1 className="text-3xl font-bold underline">Tailwind Test</h1>
    </>
  )
}

