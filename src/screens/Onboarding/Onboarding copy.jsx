import React from 'react';
import {useForm} from 'react-hook-form';
import {
  Image,
  SafeArea,
  ScrollView,
  Text,
  Dropdown,
  Button,
  TextInput,
} from '../../components';
import {
  disabilityOptions,
  education,
  genderOptions,
  parentsOptions,
  schoolOptions,
  sexualityOptions,
} from '../../constants';

export const Onboarding = ({navigation}) => {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      education: '',
      gender: '',
      sexuality: '',
      otherSex: '',
      parents: '',
      school: '',
      postcode: '',
      disability: '',
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  console.log('errors', errors);
  return (
    <SafeArea>
      <ScrollView>
        <Text type="title">Tell us a bit more about yourself.</Text>
        <Image source={require('../../assets/images/tell-us.png')}></Image>
        <Dropdown
          label="What is your current education level?"
          control={control}
          data={education}
          name="education"
        />
        <Dropdown
          label="What is your gender?"
          control={control}
          data={genderOptions}
          name="gender"
        />
        <Dropdown
          label="What is your sexuality?"
          control={control}
          data={sexualityOptions}
          name="sexuality"
        />
        
        <TextInput
          placeholder="If other, specify your sexuality"
          name="otherSex"
          control={control}
        />
        <Dropdown
          label="Did either of you parents attend university?"
          control={control}
          data={parentsOptions}
          name="parents"
        />
        <Dropdown
          label="Did you attend public or private school?"
          control={control}
          data={schoolOptions}
          name="school"
        />
        <TextInput
          placeholder="What post code did you grow up in?"
          name="postcode"
          control={control}
        />
        <Dropdown
          label="Do you consider yourself to have a disability? (please select one option only)"
          control={control}
          data={disabilityOptions}
          name="hasDisability"
        />
        <TextInput
          placeholder="If yes, specify what disability"
          name="disability"
          control={control}
        />
        <Button
          title="Submit"
          txtColor="#ee2844"
          bgColor="white"
          onPress={handleSubmit(onSubmit)}
        />
      </ScrollView>
    </SafeArea>
  );
};
