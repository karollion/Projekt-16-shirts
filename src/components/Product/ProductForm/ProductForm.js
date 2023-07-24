import styles from './ProductForm.module.scss';
import Button from './Button/Button';
import OptionColor from './OptionColor/OptionColor';
import OptionSize from './OptionSize/OptionSize';
import PropTypes from 'prop-types';

const ProductForm = ({addToCart, sizes, currentSize, setCurrentSize, colors, currentColor, setCurrentColor, prepareColorClassName}) => {
  console.log("ProductForm: " , currentColor);
  return (
    <form onSubmit={addToCart} >
      <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} />
      <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor} prepareColorClassName={prepareColorClassName} />
      <Button className={styles.button}><span className="fa fa-shopping-cart" /></Button>
    </form>
  );
};

ProductForm.propTypes = {
  addToCart: PropTypes.func.isRequired,
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.object.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
  prepareColorClassName: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired
};
export default ProductForm;