/**
 * Copied from the react-native NewAppScreen Header
 * @flow
 * @format
 */

'use strict';

import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image
} from 'react-native';

export default class Header extends React.Component{
 
  render(){
    return (
      <View style={styles.footer}>
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
    footer:{
        flex: 1,
        alignSelf:"flex-end",
        marginBottom:0
    }
  });
