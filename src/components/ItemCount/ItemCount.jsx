import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount]=useState(initial)
    const sumar = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }
    const restar = () => {
        if(stock > 0){
            setCount(count-1)
        }
    }
  return (
    <div className='d-flex justify-content-center flex-column align-items-center'>
    <div>
        <Button onClick={restar}>-</Button>
        <span className='btn'>{count}</span>
        <Button onClick={sumar}>+</Button>
    </div> 
    <Button disabled={count === 0}onClick={()=> onAdd(count)}>Comprar</Button>
    </div>
  )
}

export default ItemCount
