import { LoadBtn } from './Button.styled';

export const Button = ({ loadMore }) => {
  return (
    <LoadBtn type="button" onClick={loadMore}>
      Load More
    </LoadBtn>
  );
};
