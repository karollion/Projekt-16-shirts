import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from './ProductImage/ProductImage';
import ProductForm from './ProductForm/ProductForm';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  const getPrice = () => {
    return (
      props.basePrice + currentSize.additionalPrice
    );
  };

  const addToCart = e => {
    e.preventDefault();

    console.log('SUMMARY');
    console.log('=======');
    console.log('Name: ' + props.title);
    console.log('Price: ' + getPrice());
    console.log('Size: ' + currentSize.name);
    console.log('Color: ' + currentColor);
  };

  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm sizes={props.sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} 
                    colors={props.colors} currentColor={currentColor} setCurrentColor={setCurrentColor} 
                    addToCart={addToCart} prepareColorClassName={prepareColorClassName} />
        
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes:  PropTypes.array.isRequired,
};

export default Product;