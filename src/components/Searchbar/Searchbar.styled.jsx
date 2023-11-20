import styled from 'styled-components';
import { Form as FormikForm, Field as FormikField } from 'formik';

export const SearchWrap = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding: ${p => p.theme.spacing(3)} ${p => p.theme.spacing(6)};
  background-color: ${p => p.theme.colors.blue};
  box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  -webkit-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  -moz-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
`;

export const Form = styled(FormikForm)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.md};
  overflow: hidden;
`;

export const SearchBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  padding: 0;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const Field = styled(FormikField)`
  display: block;
  max-width: 552px;
  width: 100%;
  height: 100%;
  font-size: 20px;
  background-color: inherit;
  border: none;
  outline: none;
  padding: 0 ${p => p.theme.spacing(1)};

  &::placeholder {
    font-size: 18px;
  }
`;
