import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../../Product';
import './header.css';

const Header = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {products.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <img src={item.image} alt={item.name} />
          <p>{item.description}</p>
          <Link to={`/item/${item.id}`}>Ver Producto</Link>
        </div>
      ))}
    </div>
  );
};

export default Header;
