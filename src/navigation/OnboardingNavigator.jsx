import React from 'react';
import {theme} from '../constants/theme';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Country,
  Ethnicity,
  Gender,
  BirthDate,
  Education,
  School,
  FinishedSchool,
  English,
  Maths,
  Degree,
  Undergraduate,
  UGCourse,
  UGGrade,
  GraduationYear,
  CareerInterest,
  PGDegree,
  Postgrad,
  PGCourse,
  PGGrade,
  PGGradYear,
  Onboarding,
} from '../screens';

const Stack = createStackNavigator();

export const OnboardingNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        title: '',
        headerStyle: {
          backgroundColor: theme.colors.background,
          shadowColor: theme.colors.background,
        },
      }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Gender" component={Gender} />
      <Stack.Screen name="BirthDate" component={BirthDate} />
      <Stack.Screen name="Country" component={Country} />
      <Stack.Screen name="Ethnicity" component={Ethnicity} />
      <Stack.Screen name="Education" component={Education} />
      <Stack.Screen name="School" component={School} />
      <Stack.Screen name="FinishedSchool" component={FinishedSchool} />
      <Stack.Screen name="English" component={English} />
      <Stack.Screen name="Maths" component={Maths} />
      <Stack.Screen name="Degree" component={Degree} />
      <Stack.Screen name="Undergraduate" component={Undergraduate} />
      <Stack.Screen name="UGCourse" component={UGCourse} />
      <Stack.Screen name="UGGrade" component={UGGrade} />
      <Stack.Screen name="GraduationYear" component={GraduationYear} />
      <Stack.Screen name="CareerInterest" component={CareerInterest} />
      <Stack.Screen name="PGDegree" component={PGDegree} />
      <Stack.Screen name="Postgrad" component={Postgrad} />
      <Stack.Screen name="PGCourse" component={PGCourse} />
      <Stack.Screen name="PGGrade" component={PGGrade} />
      <Stack.Screen name="PGGradYear" component={PGGradYear} />
    </Stack.Navigator>
  );
};
