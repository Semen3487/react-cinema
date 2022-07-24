import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Stack, { Button } from '@mui/material';
import * as Yup from 'yup';

import { createDirectorAction, updateDirectorAction } from '../../store/actions/directorActions';
// import {emptyDirector} from constants

function DirectorForm() {

  const dispatch = useDispatch();
  const {directorsList: {directors}} = useSelector((state) => state);
  const {id} = useParams();
  const navigate = useNavigate();
  const currentDirector = directors.find((director) => director.id === parseInt(id));

  const goBackTo = () => {
    navigate('/directors')
  };

  const onDirectorSubmit = (values, action) => {
    !values.id
      ? dispatch(createDirectorAction({...values, id: Date.now()}))
      : dispatch(updateDirectorAction(values));
      goBackTo();
  };

  const schema = Yup.object().shape({
    fullName: Yup.string().required('Field Full Name is required')
  });

  const renderFormik = ({values}) => {
    return (
      <Form>
        <Stack>
          <Stack direction='row' spacing={2} >
            <label htmlFor='fullName'
                   className='label'>
              Full Name
            </label>
            <Field name='fullName'/>
          </Stack>
          <ErrorMessage name='fullName' >
              {(msg) => <div className='error' >{msg}</div>}
          </ErrorMessage>
          <Stack direction='row' spacing={2} >
            <label htmlFor='birthYear'
                   className='label'>
              Birth Year
            </label>
            <Field name='birthYear' as='select'/>
          </Stack>
          <Stack direction='row' spacing={2} >
            <label htmlFor='nationality'
                   className='label'>
              Nationality
            </label>
            <Field name='nationality' as='select'/>
          </Stack>
          <fieldset>
            <legend>Movies</legend>
            <FieldArray name='movies' >
              {({push, remove, form: {values: {movies}}}) => {
                return (
                  <Stack spacing={2}>
                    {movies.map((movie, index) => (
                      <Stack key={index}
                             direction='row'
                             spacing={2}>
                        <Field name={`movies[${index}]`} >

                        </Field>
                        {index > 0 && (
                          <Button type='button' 
                                  variant='contained'
                                  size='small'
                                  onClick={() => remove(index)}
                                  >
                            -
                          </Button>
                        )}
                        
                        <Button type='button' 
                                variant='contained'
                                size='small'
                                onClick={() => push('')}
                                >
                                  +
                        </Button>
                      </Stack>
                    ))}
                  </Stack>
                )
              } }
            </FieldArray>
          </fieldset>
          <Stack direction='row' spacing={2} >
            <label htmlFor='movies'
                   className='label'>
              Movies
            </label>
            <Field name='movies' as='select'/>
          </Stack>
        </Stack>
      </Form>
    )
  }

  return (
    <Formik
      initialValues={currentDirector ? currentDirector : {}}//emptyDirector
      onSubmit={onDirectorSubmit}
      validationSchema={schema}
      >
      {renderFormik}
    </Formik>
  )
}

export default DirectorForm;