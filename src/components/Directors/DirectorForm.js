import React from 'react';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack/Stack';
import { Button } from '@mui/material';
import * as Yup from 'yup';
import SaveIcon from '@mui/icons-material/Save';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import ClearIcon from '@mui/icons-material/Clear';

import { createDirectorAction, updateDirectorAction } from '../../store/actions/directorActions';
import { initDirector } from '../../constants';

function DirectorForm() {

  const dispatch = useDispatch();
  const {directorsList: {directors}} = useSelector((state) => state);
  const {id} = useParams();
  const navigate = useNavigate();
  const currentDirector = directors.find((director) => director.id === parseInt(id));

  const goBackTo = () => {
    navigate('/directors')
  };

  const onDirectorSubmit = (values, actions) => {
    !values.id
      ? dispatch(createDirectorAction({...values, id: Date.now()}))
      : dispatch(updateDirectorAction(values));
      goBackTo();
  };

  const schema = Yup.object().shape({
    fullName: Yup.string().required('Field Full Name is required')
  });

  const renderFormik = (props) => {
    return (
      <Form className='form-inner'>
        <Stack>
          <fieldset className='form-item'>
            <legend>Full Name</legend>
              <Field name='fullName'/>
            <ErrorMessage name='fullName' >
                {(msg) => <div className='error' >{msg}</div>}
            </ErrorMessage>
          </fieldset>
          <fieldset className='form-item'>
            <legend>Birth Year</legend>
            <Field name='birthYear' />
          </fieldset>
          <fieldset className='form-item'>
            <legend>Nationality</legend>
            <Field name='nationality' />
          </fieldset>
          <fieldset className='form-item'>
            <legend>Movies</legend>
            <FieldArray name='movies' >
              {({push, remove, form: {values: {movies}}}) => {
                return (
                  <Stack spacing={2}>
                    {movies.map((movie, index) => (
                      <Stack key={index} direction='row'
                             spacing={2}>
                        <Field name={`movies[${index}]`} />
                        <Stack key={index} direction='row'>
                          {index > 0 && (
                          <button type='button' className='input-button'
                                  onClick={() => remove(index)} >
                                    -
                          </button>
                        )}
                        <button type='button' className='input-button'
                                onClick={() => push('')}>
                                  +
                        </button>
                        </Stack>
                      </Stack>
                    ))}
                  </Stack>
                )
              } }
            </FieldArray>
          </fieldset>
          <fieldset className='form-item'>
            <legend>Photo</legend>
            <Field name='image' as='textarea' className='form-area'/>
          </fieldset>
          <Stack direction='row' spacing={2} justifyContent='center' className='form-button'>
            <Button type='submit' variant='contained' size='medium'
                    startIcon={<SaveIcon/>}
                    disabled={!props.isValid}>
                      Save
            </Button>
            <Button type='button' variant='contained' size='medium'
                    onClick={goBackTo}
                    startIcon={<KeyboardReturnIcon/>}>
                      Return
            </Button>
            <Button type='reset' variant='contained' size='medium'
                    startIcon={<ClearIcon/>}>
                      Reset
            </Button>
          </Stack>
        </Stack>
      </Form>
    )
  }

  return (
    <Formik
      initialValues={currentDirector ? currentDirector : initDirector}
      onSubmit={onDirectorSubmit}
      validationSchema={schema}
      >
      {renderFormik}
    </Formik>
  )
}

export default DirectorForm;