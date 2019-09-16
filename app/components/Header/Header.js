/**
 * Copied from the react-native NewAppScreen Header
 * @flow
 * @format
 */

'use strict';

import React from 'react';
import {
  Text, 
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image
} from 'react-native';

export default class Header extends React.Component{
 
  render(){
    return (
      <View style={styles.header}>
        <Text style={styles.text}>Mishnah Yomi</Text>
        <TouchableWithoutFeedback onPress={this.props.toggleSettings}>            
          <Image
            style={{width: 66, height: 58, alignSelf:'flex-end'}}
            source={{uri:'https://img.icons8.com/color/48/000000/settings.png' }}
            opacity={this.props.showSettings? 0.5 : 1}
         /> 
        </TouchableWithoutFeedback>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
    header:{
      flex:1,
      justifyContent: "space-around",
    },
    text: {
      fontSize: 40,
      fontWeight: '600',
      color: '#000',
      alignSelf:'flex-start'
    }
  });
