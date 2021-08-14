export const stageTwoEndConfig = [
  {
    name: 'screen',
    component: 'screen',
    children: [
      {
        name: 'title',
        component: 'text',
        type: 'title',
        children:
          'Congratulations! You are in the Loop. Now, tell us more about your interests.',
      },
      {
        name: 'image',
        component: 'image',
        source: require('../assets/images/stage-two-end.png'),
      },
      {
        name: 'button',
        component: 'button',
        bgColor: '#ee2844',
        title: 'Next >',
        // goTo: 'Onboarding',
      },
    ],
  },
];
