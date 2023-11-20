import styled from 'styled-components';

export const LoadBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
  width: ${p => p.theme.spacing(40)};
  height: ${p => p.theme.spacing(10)};
  margin: 0 auto;
  background-color: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.white};
  font-weight: 700;
  border: none;
  border-radius: ${p => p.theme.radii.md};
  opacity: 0.8;
  outline: none;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    opacity: 1;
  }
`;
