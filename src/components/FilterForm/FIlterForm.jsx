import { Formik } from 'formik';
import { Field, Label, InputTitle } from './FilterForm.styled';
import { changeFilter } from 'redux/filter/filterSlice';
import { useDispatch } from 'react-redux';

const FilterForm = () => {
  const dispatch = useDispatch();
  const handleChange = ({ currentTarget: { value } }) => {
    dispatch(changeFilter(value));
  };
  return (
    <Formik>
      <Label>
        <InputTitle>Search by name</InputTitle>
        <Field name="filter" onChange={handleChange} />
      </Label>
    </Formik>
  );
};

export default FilterForm;
