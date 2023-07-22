import styles from './ProductForm.module.scss';
import clsx from 'clsx';
import Button from './Button/Button';

const ProductForm = props => {
  return (
    <form onSubmit={props.cart} >
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          {props.sizes.map((size) => (<li key={size}><button  onClick={(e) => props.setCurrentSize(size)} type='button' className={clsx(size.name === props.currentSize.name && styles.active)}>{size.name}</button></li>))}
        </ul>
      </div>
      <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
          {props.colors.map((item) => (<li key={item}><button onClick={(e) => props.setCurrentColor(item)}type="button" className={clsx(props.prepareColorClassName(item), item === props.currentColor && styles.active)} /></li>))}
        </ul>
      </div>
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );

};

export default ProductForm;