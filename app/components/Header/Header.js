/**
 * Copied from the react-native NewAppScreen Header
 * @flow
 * @format
 */

'use strict';

import React from 'react';
import {Text, View,StyleSheet} from 'react-native';

export default class Header extends React.Component{
  render(){
    return (
      <View>
        <Text style={styles.text}>Mishnah Yomi</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000'
  }
});
