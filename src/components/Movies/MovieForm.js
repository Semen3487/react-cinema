import React from 'react';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack/Stack';
import { Button } from '@mui/material';
import * as Yup from 'yup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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

  const onMovieSubmit = (values, action) => {
    !values.id
      ? dispatch(createMovieAction({...values, id: Date.now()}))
      : dispatch(updateMovieAction(values));
      goBackTo();
  };

  const schema = Yup.object().shape({
    title: Yup.string().required('Title is required')
  });

  const renderFormik = ({values}) => {
    return (
      <Form>
        <Stack>
          <Stack direction='row' spacing={2} >
            <label htmlFor='title'
                   className='label'>
              Title
            </label>
            <Field name='title'/>
          </Stack> 
          <ErrorMessage name='title' >
              {(msg) => <div className='error' >{msg}</div>}
          </ErrorMessage>
          
           
          <fieldset>
            <legend>Actors</legend>
            <FieldArray name='actors' >
              {({push, remove, form: {values: {actors}}}) => {
                return (
                  <Stack spacing={2}>
                    {actors.map((actor, index) => (
                      <Stack key={index}
                             direction='row'
                             spacing={2}>
                        <Field name={`actors[${index}]`} >

                        </Field>
                        {index > 0 && (
                          <Button type='button' 
                                  variant='contained'
                                  size='small'
                                  startIcon={<RemoveIcon/>}
                                  onClick={() => remove(index)}
                                  >
                          </Button>
                        )}
                        <Button type='button' 
                                variant='contained'
                                size='small'
                                startIcon={<AddIcon/>}
                                onClick={() => push('')}
                                >
                        </Button>
                      </Stack>
                    ))}
                  </Stack>
                )
              } }
            </FieldArray>
          </fieldset>
          <fieldset>
            <legend>Directors</legend>
            <FieldArray name='directors'>
              {({push, remove, form: {values: {directors}}}) => {
                return (
                  <Stack spacing={2}>
                    {directors.map((director, index) =>(
                      <Stack key={index} direction='row' spacing={2}>
                        <Field name={`directors[${index}]`} />
                        {index > 0 && (
                          <Button type='button' 
                                  variant='contained'
                                  size='small'
                                  startIcon={<RemoveIcon/>}
                                  onClick={() => remove(index)}
                                  >
                          </Button>
                        )}
                        <Button type='button' 
                                variant='contained'
                                size='small'
                                startIcon={<AddIcon/>}
                                onClick={() => push('')}
                                >
                        </Button>

                      </Stack>
                    ))}

                  </Stack>
                )
              }}
            </FieldArray>
          </fieldset>
          
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