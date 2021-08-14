export const questionLandingConfig = [
  {
    name: 'screen',
    component: 'screen',
    children: [
      {
        name: 'title',
        component: 'text',
        type: 'title',
        children: 'Tell us a bit more about yourself',
      },
      {
        name: 'body',
        component: 'text',
        type: 'body',
        color: 'black',
        children: 'Before you can get started, we have a few questions.',
      },
      {
        name: 'image',
        component: 'image',
        source: require('../assets/images/q-landing.png'),
      },
      {
        name: 'button',
        component: 'button',
        bgColor: '#ee2844',
        title: 'Begin >',
        goTo: 'Onboarding',
      },
    ],
  },
];
