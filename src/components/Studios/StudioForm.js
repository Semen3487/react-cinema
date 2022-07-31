import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack/Stack';
import { Button } from '@mui/material';
import * as Yup from 'yup';
import SaveIcon from '@mui/icons-material/Save';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import ClearIcon from '@mui/icons-material/Clear';

import { createStudioAction, updateStudioAction } from '../../store/actions/studioActions';
import { initStudio } from '../../constants';


function StudioForm() {

  const dispatch = useDispatch();
  const {studiosList: {studios}} = useSelector((state) => state);
  const {id} = useParams();
  const navigate = useNavigate();
  const currentStudio = studios.find((studio) => studio.id === parseInt(id));

  const goBackTo = () => navigate('/studios');

  const onStudioSubmit = (values, action) => {
    !values.id
      ? dispatch(createStudioAction({...values, id: Date.now()}))
      : dispatch(updateStudioAction(values));
      goBackTo();
  };

  const schema = Yup.object().shape({
    title: Yup.string().required('Field Title is required')
  });

  const renderFormik = ({values}) => {
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
            <legend>Location</legend>
            <Field name='location' />
          </fieldset>
          <fieldset className='form-item'>
            <legend>Foundation Year</legend>
            <Field name='foundationYear' />
          </fieldset>
          <fieldset className='form-item'>
            <legend>Logo</legend>
            <Field name='logo' as='textarea' className='form-area'/>
          </fieldset>
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
      initialValues={currentStudio ? currentStudio : initStudio}
      onSubmit={onStudioSubmit}
      validationSchema={schema}
      >
      {renderFormik}
    </Formik>
  )
}

export default StudioForm;