import { Formik } from 'formik';
import { BsSearch } from 'react-icons/bs';

import { SearchWrap, Form, SearchBtn, Field } from './Searchbar.styled';

export const Searchbar = ({ addQuery }) => {
  return (
    <Formik
      initialValues={{
        query: '',
      }}
      onSubmit={values => {
        addQuery(values);
      }}
    >
      <SearchWrap>
        <Form>
          <SearchBtn type="submit">
            <BsSearch size="20" />
          </SearchBtn>

          <Field
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
          />
        </Form>
      </SearchWrap>
    </Formik>
  );
};
