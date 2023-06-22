import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <ItemListContainer greeting="Gracias por su visita!!!"/> 
    <Header />
    
  </React.StrictMode>
)
