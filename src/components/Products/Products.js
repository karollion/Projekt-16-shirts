import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);

  return (
    /* transfer of all parameters to the module */
    <section>
      {products.map(product => <Product {...product} />)}; 
    </section>
  );
};

export default Products;