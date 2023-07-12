import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ children }) => (
  <section className={css.Section}>{children}</section>
);

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;