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

import { createMovieAction, updateMovieAction } from '../../store/actions/moviesActions';
import { initMovie } from '../../constants';



function MovieForm() {

  const dispatch = useDispatch();

  const {moviesList: {movies}} = useSelector((state) => state);

  const {id} = useParams();
  const navigate = useNavigate();

  const currentMovie = movies.find((movie) => movie.id === parseInt(id));

  const goBackTo = () => {
    navigate('/movies')
  };

  const onMovieSubmit = (values, actions) => {
    !values.id
      ? dispatch(createMovieAction({...values, id: Date.now()}))
      : dispatch(updateMovieAction(values));
      goBackTo();
  };

  const schema = Yup.object().shape({
    title: Yup.string().required('Title is required')
  });

  const renderFormik = (props) => {
    return (
      <Form className='form-inner'>
        <Stack>
        <fieldset className='form-item'>
          <legend>Title</legend>
            <Field name='title'/>
          <ErrorMessage name='title' >
              {(msg) => <div className='error' >{msg}</div>}
          </ErrorMessage>
          </fieldset>
          <fieldset className='form-item'>
            <legend>Actors</legend>
            <FieldArray name='actors' >
              {({push, remove, form: {values: {actors}}}) => {
                return (
                  <Stack spacing={2}>
                    {actors.map((actor, index) => (
                      <Stack key={index}
                             direction='row'
                             spacing={2} >
                        <Field name={`actors[${index}]`} />
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
              }}
            </FieldArray>
          </fieldset>
          <fieldset className='form-item'>
            <legend>Directors</legend>
            <FieldArray name='directors'>
              {({push, remove, form: {values: {directors}}}) => {
                return (
                  <Stack spacing={2}>
                    {directors.map((director, index) =>(
                      <Stack key={index} direction='row' spacing={2}>
                        <Field name={`directors[${index}]`} />
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
              }}
            </FieldArray>
          </fieldset>
          <fieldset className='form-item'>
            <legend>Studios</legend>
            <FieldArray name='studios'>
              {({push, remove, form: {values: {studios}}}) => {
                return (
                  <Stack spacing={2}>
                    {studios.map((studio, index) =>(
                      <Stack key={index} direction='row' spacing={2}>
                        <Field name={`studios[${index}]`} />
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
              }}
            </FieldArray>
          </fieldset>
          <fieldset className='form-item'>
            <legend>Photo</legend>
            <Field name='poster' as='textarea' className='form-area'/>
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
      initialValues={currentMovie ? currentMovie : initMovie}
      onSubmit={onMovieSubmit}
      validationSchema={schema}
      >
      {renderFormik}
    </Formik>
  )
}

export default MovieForm;