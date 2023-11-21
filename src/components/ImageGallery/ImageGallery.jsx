import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <GalleryList>
      {images.map(img => (
        <ImageGalleryItem images={img} key={img.id} />
      ))}
    </GalleryList>
  );
};
