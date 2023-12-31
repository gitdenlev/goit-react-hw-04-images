import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';


const ImageGalleryItem = ({ webformatURL, largeImageURL, onImageClick }) => (
  <li className={css.imageGalleryItem}>
    <img
      src={webformatURL}
      alt=""
      className={css.imageGalleryItemImage}
      onClick={() => onImageClick(largeImageURL)}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  onImageClick: PropTypes.func,
};

export default ImageGalleryItem;