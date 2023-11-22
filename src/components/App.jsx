import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { Main } from './Helper/Layout';
import { GlobalStyle } from './GlobalStyle';

import { fetchImages } from './Helper/api';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getImages() {
      try {
        setIsLoading(true);

        const normalQuery = query.split('/').pop().trim();

        if (normalQuery === '') {
          toast('Please enter key words for search', {
            icon: '📝',
          });
          return;
        }

        const apiParams = {
          q: normalQuery,
          image_type: 'photo',
          orientation: 'horizontal',
          page: page,
          per_page: 12,
        };

        const newImages = await fetchImages(apiParams);

        if (newImages.total === 0) {
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          return;
        } else {
          setImages(prevImages => [...prevImages, ...newImages.hits]);
          setTotalImages(newImages.totalHits);
        }
      } catch (error) {
        toast.error('Oops! Something went wrong. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }

    getImages();
  }, [query, page]);

  const addQuery = newQuery => {
    setQuery(`${Date.now()}/${newQuery.query}`);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Searchbar addQuery={addQuery} />
      <Main>
        {images.length > 0 && <ImageGallery images={images} />}
        {isLoading && <Loader />}
        {images.length >= 12 && totalImages > images.length && (
          <Button loadMore={handleLoadMore} />
        )}
        <GlobalStyle />
        <Toaster position="top-right" />
      </Main>
    </>
  );
};
