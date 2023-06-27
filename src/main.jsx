
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import 'bootstrap-icons/font/bootstrap-icons.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import DetailPage from './components/DetailPage/DetailPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <NavBar />
   <Routes>
    <Route path='/'element={<ItemListContainer greeting="Gracias por su visita!!!"/> }/>
    <Route path='/item/:id' element={<DetailPage/>}/>
   </Routes>
   </BrowserRouter>  
  </React.StrictMode>
)