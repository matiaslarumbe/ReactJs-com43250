
import Item from '../Item/Item';

const ItemList = ({ productos, titulo }) => {
  return (
    
    
    
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
        <h2 className='main-title'>{titulo}</h2>
      {productos.map(producto => <Item key={producto.id} producto={producto} />)}
      </div>
    
  );
};

export default ItemList;

