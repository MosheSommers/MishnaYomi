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
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import Header  from './app/components/Header/Header';
import TodaysMishnah from './app/components/TodaysMishnah/TodaysMishnah';
import Settings from './app/components/Settings/Settings';
import Footer  from './app/components/Footer/Footer';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      showSettings:false,
      startDate:"2019-08-17", //The default date for my MishnahYomi group
      isHebrew:true
    };
    this.getStoredSetting(); 
  }

  getStoredSetting = () => {
    AsyncStorage.getItem('startDate').then((startDate) => {
      if(startDate){
        this.setState({
          showSettings:this.state.showSettings,
          startDate
        });
      }
    });
    AsyncStorage.getItem('isHebrew').then((isHebrew) => {
      if(isHebrew){
        this.setState({
          showSettings:this.state.showSettings,
          startDate:this.state.startDate,
          isHebrew
        });
      }
    });

  };

  toggleSettings = () => { 
    this.setState({
      showSettings:!this.state.showSettings
    });
  };

  setDate = (startDate) => {
    this.setState({startDate, showSettings:false});
    AsyncStorage.setItem('startDate',date);
  }

  setLanguage = (isHebrew) => {
    this.setState({isHebrew: isHebrew, showSettings:false});
    AsyncStorage.setItem('isHebrew', isHebrew);
  }

  render(){
    return (
      <View style={{flex:1}}>
        <ImageBackground
          accessibilityRole={'image'}
          source={require('./mishnahbackground.jpg')}
          style={styles.background}
          imageStyle={styles.logo}>   
                <Header isHebrew={this.state.isHebrew} />
                <View style={styles.body}>
                  <View style={styles.sectionContainer}>
                    {!this.state.showSettings ?
                      <TodaysMishnah 
                        isHebrew={this.state.isHebrew}
                        startDate={this.state.startDate}/>:
                      <Settings 
                        isHebrew={this.state.isHebrew}
                        setLanguage={this.setLanguage}
                        startDate={this.state.startDate} 
                        setDate={this.setDate} />   
                    }
               
                  </View>    
                </View>
                <Footer showSettings={this.state.showSettings} toggleSettings={this.toggleSettings}/>
        </ImageBackground>
      </View>
      
    );
  }

};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingTop: 96,
    paddingBottom:96
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
