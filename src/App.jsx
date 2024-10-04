import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link

} from "react-router-dom";
import Home from "./components/page/home";
import Image from "./components/page/image";
import Loader from "./components/template/loader";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
      // Simulamos una carga de datos
      setTimeout(() => {
          setData({ message: '¡Datos cargados!' });
          setLoading(false);
      }, 300); // Carga de 2 segundos
  }, []);
  if (loading) {
    return <Loader />
    
}

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/image/:id?" element={<Image /> } />
          
        </Routes>
      </Router>
      
    </>
  )
}