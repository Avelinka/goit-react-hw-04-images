import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { Main } from './Helper/Layout';
import { GlobalStyle } from './GlobalStyle';

import { fetchImages } from './Helper/api';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    totalImages: 0,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ isLoading: true });

        const trimmedQuery = this.state.query.split('/').pop().trim();

        if (trimmedQuery === '') {
          toast.error('Please enter key words for search');
          return;
        }

        const initialParams = {
          q: trimmedQuery,
          image_type: 'photo',
          orientation: 'horizontal',
          page: this.state.page,
          per_page: 12,
        };
        const initialImages = await fetchImages(initialParams);
        if (initialImages.total === 0) {
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          return;
        } else {
          this.setState(prevState => ({
            images: [...prevState.images, ...initialImages.hits],
            totalImages: initialImages.totalHits,
          }));
          this.setState({ error: false });
        }
      } catch (error) {
        toast.error('Oops! Something went wrong. Please try again later.');
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  addQuery = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery.query}`,
      page: 1,
      images: [],
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { images, isLoading, totalImages } = this.state;
    return (
      <>
        <Searchbar addQuery={this.addQuery} />
        <Main>
          {images.length > 0 && <ImageGallery images={images} />}
          {isLoading && <Loader />}
          {images.length >= 12 && totalImages > images.length && (
            <Button loadMore={this.handleLoadMore} />
          )}
          <GlobalStyle />
          <Toaster position="top-right" />
        </Main>
      </>
    );
  }
}
