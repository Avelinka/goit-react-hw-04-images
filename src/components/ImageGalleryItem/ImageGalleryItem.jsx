import { useState } from 'react';
import { ImageModal } from '../ImageModal/ImageModal';
import { GalleryListItem, GalleryImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  images: { webformatURL, largeImageURL, tags },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <GalleryListItem>
      <GalleryImg
        src={webformatURL}
        alt={tags}
        loading="lazy"
        onClick={openModal}
      />
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageURL={largeImageURL}
        imageDescription={tags}
      />
    </GalleryListItem>
  );
};
