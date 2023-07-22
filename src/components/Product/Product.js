import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

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

  const cart = e => {
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
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form onSubmit={cart} >
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size) => (<li key={size}><button  onClick={(e) => setCurrentSize(size)} type='button' className={clsx(size.name === currentSize.name && styles.active)}>{size.name}</button></li>))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((item) => (<li key={item}><button onClick={(e) => setCurrentColor(item)}type="button" className={clsx(prepareColorClassName(item), item === currentColor && styles.active)} /></li>))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  title: PropTypes.string,
  basePrice: PropTypes.number,
  colors: PropTypes.array,
  sizes:  PropTypes.array,
};

export default Product;