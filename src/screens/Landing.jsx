import React from 'react';
import {
  Button,
  SafeArea,
  ScrollView,
  Image,
  Text,
  Container,
} from '../components';
export const Landing = ({navigation}) => {
  return (
    <SafeArea type="dark">
      <ScrollView>
        <Image source={require('../assets/images/loopnotluck1.png')} />
        <Text type="title">We Represent the Underrepresented</Text>
        <Container type="landing-main">
          <Container type="landing-body">
            <Text type="body">
              You shouldn't have to 'know someone who knows someone' to find out
              about amazing career opportunities across the UK.
            </Text>
          </Container>
          <Container type="landing-body">
            <Text type="body">
              Nobody wants to scroll through thousands of search results or
              leave it up to luck.
            </Text>
          </Container>
          <Container type="landing-body">
            <Text type="body">
              Using Artificial Intelligence, we have automated the job hunt.
              Providing you with the perfect selection of opportunities to apply
              for and the chance to be headhunted for roles.
            </Text>
          </Container>
        </Container>
        <Text type="title">Get in the Loop</Text>
        <Button
          onPress={() => navigation.navigate('Signup')}
          title="Apply"
          bgColor="red"
        />
        <Button
          onPress={() => navigation.navigate('Login')}
          title=" Sign In"
          bgColor="red"
        />
      </ScrollView>
    </SafeArea>
  );
};