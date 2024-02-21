import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';

const IssueForm = ({ deviceDetails }) => {
    /*
    Form is being populated by device details if editing an existing device.
    Otherwise, show empty fields.
    */
    const formik = useFormik({
      initialValues: {
        deviceName: deviceDetails.deviceName || '',
        deviceName: deviceDetails || '',
        deviceName: deviceDetails || '',
        deviceName: deviceDetails || '',
        deviceName: deviceDetails || '',
        deviceName: deviceDetails || '',
      },
      onSubmit: async (values) => {
        // await
      },
      validationSchema: Yup.object({
        deviceName: Yup.string().required('Device name is required.').max(30),
        deviceManuFacturer: Yup.string().required(`Manufacturer's name is required.`),
        deviceNumber: Yup.string().required(`Device number is required.`),
        recipientName: Yup.string().required(`Recipient's name is required.`),
        deviceNumber: Yup.string().required(`Manufacturer's name is required.`),
        deviceNumber: Yup.string().required(`Manufacturer's name is required.`)
      }),
    });
  
    return (
      <FormikProvider value={formik}>
        <Form>
          <TextInputLiveFeedback
            label='Device Name'
            id='deviceName'
            name='deviceName'
            // helpText=''
            type='text'
          />
          <div>
            <button type='submit'>Submit</button>
          </div>
        </Form>
      </FormikProvider>
    );
  };

export default IssueForm;