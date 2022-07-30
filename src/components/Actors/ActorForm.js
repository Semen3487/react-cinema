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

import { createActorAction, updateActorAction } from '../../store/actions/actorActions';
import { initActor } from '../../constants';

function ActorForm() {

  const dispatch = useDispatch();
  const {actorsList: {actors}} = useSelector((state) => state);
  const {id} = useParams();
  const navigate = useNavigate();
  const currentActor = actors.find((actor) => actor.id === parseInt(id));

  const goBackTo = () => {
    navigate('/actors')
  };

  const onActorSubmit = (values, action) => {
    !values.id
      ? dispatch(createActorAction({...values, id: Date.now()}))
      : dispatch(updateActorAction(values));
      goBackTo();
  };

  const schema = Yup.object().shape({
    fullName: Yup.string().required('Field Full Name is required')
  });

  const renderFormik = ({values}) => {
    return (
      <Form className='form-inner'>
        <Stack>
          <Stack direction='row' spacing={2} className='form-item'>
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
          <Stack direction='row' spacing={2} className='form-item'>
            <label htmlFor='image'>
              Photo
            </label>
            <Field name='image' as='textarea' className='form-area'/>
          </Stack>
          <Stack direction='row' spacing={2} justifyContent='center' className='form-button'>
            <Button type='submit' variant='contained' size='medium'
                    startIcon={<SaveIcon/>}>
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
      initialValues={currentActor ? currentActor : initActor}
      onSubmit={onActorSubmit}
      validationSchema={schema}
      >
      {renderFormik}
    </Formik>
  )
}

export default ActorForm;