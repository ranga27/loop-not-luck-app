export const onboardingConfig = [
  {
    name: 'title',
    component: 'text',
    type: 'title',
    children: 'Tell us a bit more about yourself',
  },
  {
    name: 'image',
    component: 'image',
    source: require('../assets/images/tell-us.png'),
  },
  {
    name: 'education',
    component: 'dropdown',
    label: 'What is your current education level?',
    data: [
      {label: 'School', value: 'School'},
      {label: 'University', value: 'University'},
      {label: 'Graduate', value: 'Graduate'},
      {label: 'Post-Graduate', value: 'Post-Graduate'},
      {label: 'Full-Time Employment', value: 'Full-Time Employment'},
      {label: 'Unemployed', value: 'Unemployed'},
      {
        label: 'Graduated in last 2 years & Unemployed',
        value: 'Graduated in last 2 years & Unemployed',
      },
    ],
  },
  {
    name: 'gender',
    component: 'dropdown',
    label: 'What is your gender?',
    data: [
      {label: 'Female', value: 'Female'},
      {label: 'Male', value: 'Male'},
      {label: 'Non-binary', value: 'Non-binary'},
      {label: 'Transgender', value: 'Transgender'},
      {label: 'Intersex', value: 'Intersex'},
      {label: 'I prefer not to say', value: 'I prefer not to say'},
    ],
  },
  {
    name: 'sexuality',
    component: 'dropdown',
    label: 'What is your sexuality?',
    data: [
      {label: 'Heterosexual', value: 'Heterosexual'},
      {label: 'Bisexual', value: 'Bisexual'},
      {label: 'Homosexual', value: 'Homosexual'},
      {label: 'Pansexual', value: 'Pansexual'},
      {label: 'Asexual', value: 'Asexual'},
      {label: 'Other', value: 'Other'},
      {label: 'I prefer not to say', value: 'I prefer not to say'},
    ],
  },
  {
    name: 'otherSex',
    component: 'input',
    placeholder: 'If other, specify your sexuality',
  },
  {
    name: 'parents',
    component: 'dropdown',
    label: 'Did either of you parents attend university?',
    data: [
      {label: 'Yes, both', value: 'Yes, both'},
      {label: 'Yes, one', value: 'Yes, one'},
      {label: 'None', value: 'None'},
      {label: 'I prefer not to say', value: 'I prefer not to say'},
    ],
  },
  {
    name: 'school',
    component: 'dropdown',
    label: 'Did you attend public or private school?',
    data: [
      {label: 'Public School', value: 'Public School'},
      {label: 'Private School', value: 'Private School'},
      {label: 'Grammar School', value: 'Grammar School'},
      {label: 'Home School', value: 'Home School'},
      {label: 'International School', value: 'International School'},
    ],
  },
  {
    name: 'postcode',
    component: 'input',
    placeholder: 'What post code did you grow up in?',
  },
  {
    name: 'hasDisability',
    component: 'dropdown',
    label:
      'Do you consider yourself to have a disability? (please select one option only)',
    data: [
      {label: 'No', value: 'No'},
      {
        label: 'Yes, day to day activities limited a lot',
        value: 'Yes, day to day activities limited a lot',
      },
      {
        label: 'Yes, day to day activities limited a little',
        value: 'Yes, day to day activities limited a little',
      },
    ],
  },
  {
    name: 'disability',
    component: 'input',
    placeholder: 'If yes, specify what disability',
  },
];
