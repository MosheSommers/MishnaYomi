/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Header  from './app/components/Header/Header';
import TodaysMishnah from './app/components/TodaysMishnah/TodaysMishnah';

const App = () => {
  return (
    <ImageBackground
     accessibilityRole={'image'}
     source={require('./mishnahbackground.jpg')}
     style={styles.background}
     imageStyle={styles.logo}>   
          <Header />
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <TodaysMishnah />
            </View>    
          </View>
  </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.Clear,
  },
  sectionContainer: {
    paddingTop: 96,
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    /*
     * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
     *
     * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
     * source image's size.
     */
    marginLeft: -128,
    marginBottom: -192,
  },
  
  background: {
    paddingBottom: 96,
    paddingTop: 96,
    paddingHorizontal: 32,
  }
});

export default App;
