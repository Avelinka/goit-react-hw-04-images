import { Component } from 'react';
import { ImageModal } from '../ImageModal/ImageModal';
import { GalleryListItem, GalleryImg } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const {
      image: { webformatURL, largeImageURL, tags },
    } = this.props;

    return (
      <GalleryListItem>
        <GalleryImg
          src={webformatURL}
          alt={tags}
          loading="lazy"
          onClick={this.openModal}
        />
        <ImageModal
          isOpen={isModalOpen}
          onClose={this.closeModal}
          imageURL={largeImageURL}
          imageDescription={tags}
        />
      </GalleryListItem>
    );
  }
}
