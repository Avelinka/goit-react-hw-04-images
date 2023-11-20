import styled from 'styled-components';

export const GalleryListItem = styled.li`
  border-radius: ${p => p.theme.radii.md};
  overflow: hidden;
  box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  -webkit-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  -moz-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const GalleryImg = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;
