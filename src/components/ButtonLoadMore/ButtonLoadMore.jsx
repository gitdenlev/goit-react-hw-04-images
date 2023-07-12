import PropTypes from 'prop-types';
import css from './ButtonLoadMore.module.css';


const ButtonLoadMore = ({ label, handleLoadMore }) => (
  <button type="button" className={css.ButtonLoadMore} onClick={handleLoadMore}>
    {label}
  </button>
);

ButtonLoadMore.propTypes = {
  label: PropTypes.string,
  handleLoadMore: PropTypes.func,
};

export default ButtonLoadMore;