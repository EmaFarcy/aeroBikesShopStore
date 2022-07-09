import {Routes, Route} from 'react-router-dom';
import Item from '../Item/Item';

export const Products = () => {
  return (
    <div>
        <h4>Products Page</h4>
        <Routes>
            <Route path=":productsId" element={<Item />}/>
        </Routes>
    </div>
  )
}

export default Products;
