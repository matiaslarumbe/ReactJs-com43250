import React from 'react';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import DetailPage from './components/DetailPage/DetailPage';
// React router dom
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App () {
    return (
        <Router>
           <NavBar />
           <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/Category/:id' element={<ItemListContainer/>} />
            <Route path='/detail/:id' element={<DetailPage/>} />
           </Routes>  
        </Router>
    )
}

export default App;





