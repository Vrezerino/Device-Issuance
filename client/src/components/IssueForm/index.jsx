import { useFormik, FormikProvider, Form } from 'formik';
import TextInputLiveFeedback from './TextInputLiveFeedback';
import { postDevice } from '../../services/deviceService';
//import * as Yup from 'yup';
import './issueForm.css';

const IssueForm = ({ deviceDetails, handleClick, setNotif }) => {
  // handleClick() = setAddIssue(). Hides device issue form when set false.
  const hideForm = () => handleClick(false);

  /*
  Form is being populated by device details if editing an existing device.
  Otherwise, show empty fields.
  */
  const formik = useFormik({
    initialValues: {
      deviceName: deviceDetails?.deviceName || '',
      deviceDescription: deviceDetails?.deviceDescription || '',
      deviceManufacturer: deviceDetails?.deviceManufacturer || '',
      deviceNumber: deviceDetails?.deviceNumber || '',
      recipientName: deviceDetails?.recipientName || '',
      recipientDepartment: deviceDetails?.recipientDepartment || '',
      returnDate: deviceDetails?.returnDate || '',
    },
    onSubmit: async (values) => {
      try {
        console.log('post');
        await postDevice({ ...values });
        setNotif({ severity: 'success', message: 'Device added!' });
      } catch (e) {
        setNotif({ severity: 'error', message: e.message });
      }
    },/*
    validationSchema: Yup.object({
      deviceName: Yup.string().required('Device name is required.').max(30),
      deviceDescription: Yup.string().max(200),
      deviceManuFacturer: Yup.string().required(`Manufacturer's name is required.`).max(30),
      deviceNumber: Yup.string().required(`Device number is required.`).max(30),
      recipientName: Yup.string().required(`Recipient's name is required.`).max(30),
      recipientDepartment: Yup.string().required(`Department of recipient is required.`).max(25),
      returnDate: Yup.string()
    }),*/
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <TextInputLiveFeedback
          label='Device Name'
          id='deviceName'
          name='deviceName'
          type='text'
        />
        <TextInputLiveFeedback
          label='Device Description'
          id='deviceDescription'
          name='deviceDescription'
          type='text'
        />
        <TextInputLiveFeedback
          label='Manufacturer'
          id='deviceManufacturer'
          name='deviceManufacturer'
          type='text'
        />
        <TextInputLiveFeedback
          label='Device Number'
          id='deviceNumber'
          name='deviceNumber'
          type='text'
        />
        <TextInputLiveFeedback
          label='Recipient Name'
          id='recipientName'
          name='recipientName'
          type='text'
        />
        <TextInputLiveFeedback
          label='Department'
          id='recipientDepartment'
          name='recipientDepartment'
          type='text'
        />
        <TextInputLiveFeedback
          label='Return Date'
          id='returnDate'
          name='returnDate'
          type='text'
        />
        <div>
          <button type='submit'>Submit</button>
          <button type='reset' onClick={hideForm}>Cancel</button>
        </div>
      </Form>
    </FormikProvider>
  );
};

export default IssueForm;