import React from 'react';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

 function App () {
    const [count,setCount] = useState(0)
    return (
        <div>
        <NavBar />
        </div>
    )
}

export default App;





