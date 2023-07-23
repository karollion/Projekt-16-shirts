import styles from '../ProductForm.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const OptionSize = ({sizes, currentSize, setCurrentSize}) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {sizes.map((size) => (<li key={shortid()}><button  onClick={() => setCurrentSize(size)} type='button' className={clsx(size.name === currentSize.name && styles.active)}>{size.name}</button></li>))}
      </ul>
    </div>
  );
};

OptionSize.propTypes = {
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.object.isRequired,
  setCurrentSize: PropTypes.func.isRequired
}

export default OptionSize;