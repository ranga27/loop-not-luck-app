import React from 'react';
import {theme} from '../constants';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

import {data} from '../constants/data';

const {width} = Dimensions.get('screen');

const ITEM_WIDTH = width * 0.7;
const ITEM_HEIGHT = ITEM_WIDTH * 0.7;
export const Opportunities = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={{marginTop: 50, marginBottom: 20, paddingHorizontal: 20}}>
        <Text style={{color: '#fff', fontSize: 32, fontWeight: '600'}}>
          Your Opportunities
        </Text>
      </View>
      <View style={{flex: 1, paddingBottom: 20}}>
        <ScrollView
          indicatorStyle="white"
          contentContainerStyle={{alignItems: 'center'}}>
          {data.map((item) => (
            <View key={item.id}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{marginBottom: 14}}
                onPress={() => navigation.navigate('DetailScreen', {item})}>
                <SharedElement id={`item.${item.id}.image_url`}>
                  <Image
                    style={{
                      borderRadius: 14,
                      width: ITEM_WIDTH,
                      height: ITEM_HEIGHT,
                    }}
                    source={{uri: item.image_url}}
                    resizeMode="cover"
                  />
                </SharedElement>

                <View
                  style={{
                    position: 'absolute',
                    bottom: 20,
                    left: 10,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'column', paddingLeft: 6}}>
                      <SharedElement id={`item.${item.id}.title`}>
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 24,
                            fontWeight: 'bold',
                            lineHeight: 28,
                          }}>
                          {item.title}
                        </Text>
                      </SharedElement>
                      <SharedElement id={`item.${item.id}.description`}>
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 16,
                            fontWeight: 'bold',
                            lineHeight: 18,
                          }}>
                          {item.description}
                        </Text>
                      </SharedElement>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0f0f0f',
    flex: 1,
  },
  text: {
    color: theme.colors.primary,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: theme.fonts.regular.fontFamily,
  },
});
