import PropTypes from 'prop-types';
import css from './ButtonClear.module.css';

const ButtonClear = ({ onClickClear }) => (
  <button
    type="button"
    className={css.ButtonClear}
    onClick={onClickClear}
  ></button>
);

ButtonClear.propTypes = {
  onClickClear: PropTypes.func,
};

export default ButtonClear;