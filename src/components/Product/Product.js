import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProductImage from './ProductImage/ProductImage';
import ProductForm from './ProductForm/ProductForm';


const Product = ({name, title, basePrice, colors, sizes}) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0]);

  
  const getPrice = useMemo(() => {
    return (
      basePrice + currentSize.additionalPrice
    );
  }, [currentSize, basePrice]);

  const addToCart = e => {
    e.preventDefault();

    console.log('SUMMARY');
    console.log('=======');
    console.log('Name: ' + title);
    console.log('Price: ' + getPrice);
    console.log('Size: ' + currentSize.name);
    console.log('Color: ' + currentColor);
  };

  return (
    <article className={styles.product}>
      <ProductImage title={title} name={name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductForm sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} 
                    colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor} 
                    addToCart={addToCart}/>
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes:  PropTypes.array.isRequired,
};

export default Product;