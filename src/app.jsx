import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// React router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "./main.css";
// Firebase
import { db } from "./firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import Contact from "./components/Contact.jsx/Contact";
import { CartProvider } from "./Context/CartContext";
import Item from "./components/Item/Item";
import Carrito from "./components/Carrito/Carrito";



function App() {


  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/productos/:category" element={<ItemListContainer />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;