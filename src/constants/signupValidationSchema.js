import * as Yup from 'yup';

const phoneNumberRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const signupSchema = Yup.object().shape({
  firstName: Yup.string().required().label('First Name'),
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered email'),
  phoneNumber: Yup.string()
    .required()
    .label('Phone Number')
    .matches(phoneNumberRegExp, 'Phone Number is not valid'),
  password: Yup.string()
    .label('Password')
    .required()
    .min(8, 'Password must have at least 8 characters '),
  source: Yup.string().label('Where did you hear about us? ').required(),
});
