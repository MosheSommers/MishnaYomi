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
} from 'react-native';

export default class Header extends React.Component{
 
  render(){
    return (
      <View style={styles.header}>
        <Text style={styles.text}>Mishnah Yomi</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    header:{
      flex:1,
      justifyContent: "center",
    },
    text: {
      fontSize: 40,
      fontWeight: '600',
      color: '#000',
      alignSelf:'center'
    }
  });
