import React from 'react';
import {theme} from '../../constants';
import {Title} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {Button, Image, SafeArea, ScrollView, Text} from '../../components';
import {signOutFirebase} from '../../firebase/authService';
import {useSelector} from 'react-redux';
import crashlytics from '@react-native-firebase/crashlytics';

export const Onboarding = ({navigation}) => {
  return (
    <SafeArea>
      <ScrollView>
        <Text type="title" color="#ee2844">
          Tell us a bit more about yourself.
        </Text>
        <Image source={require('../../assets/images/tell-us.png')}></Image>
      </ScrollView>
    </SafeArea>
  );
};

const styles = StyleSheet.create({});
