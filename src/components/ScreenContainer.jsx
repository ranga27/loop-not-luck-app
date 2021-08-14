import {KeyboardAvoidingView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

const ScrollView = styled.ScrollView`
  flex: 1;
  padding: 0px 16px 0px;
`;

export const ScreenContainer = (props) => {
  const {children} = props;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          keyboardShouldPersistTaps="handled">
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
