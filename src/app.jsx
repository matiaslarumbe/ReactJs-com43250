import React from 'react';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import  Header from './components/Header/Header';
import DetailPage from './components/DetailPage/DetailPage';
// React router dom
import {BrowserRouter as router, Routes, Route, Router} from "react-router-dom"


function App () {
    const [count,setCount] = useState(0)
    return (
        <Router>
        <div>
           <Header /> 
           <NavBar />
           <Routes>
            <Route path='/detail/id:' element={DetailPage} />
           </Routes>
            
               
        </div>
          </Router>
    )
}

export default App;





