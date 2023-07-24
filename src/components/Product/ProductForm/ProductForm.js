import styles from './ProductForm.module.scss';
import Button from './Button/Button';
import OptionColor from './OptionColor/OptionColor';
import OptionSize from './OptionSize/OptionSize';

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

export default ProductForm;