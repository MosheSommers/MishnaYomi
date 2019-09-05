/**
 * Copied from the react-native NewAppScreen Header
 * @flow
 * @format
 */

'use strict';

import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { mishnahData } from './mishnahData';

export default class TodaysMishnah extends React.Component{
    
  getNumberOfDays = () => {
    const today = new Date();
    const startingDay = new Date('August 17, 2019');
    return Math.floor((today.getTime() - startingDay.getTime()) / (1000 * 3600 * 24));
  }

  getTodaysMishnah = () => {
    const days = this.getNumberOfDays();
    const upto = days * 2;//Last mishna learned
    const masechtosSize = mishnahData[31]; //Amount of mishnayos in each Masechta
    const masechtos = mishnahData[0]; //Masechta names
    let mishnayosCounter = 0;
    let i = 1;
    while (mishnayosCounter + parseInt(masechtosSize[i])  < upto){
      mishnayosCounter = mishnayosCounter + parseInt(masechtosSize[i]);
      i = i + 1;
    };
    // i now equals the index of the Masechta we're currently learning
    let perek = 1;
    while(mishnayosCounter + parseInt(mishnahData[perek][i]) < upto){
      mishnayosCounter = mishnayosCounter + parseInt(mishnahData[perek][i]);
      perek += 1;
    }

    //Current mishna is (the one after) mishnayos we learned minus the amount upto this perek 
    const mishna = upto - mishnayosCounter + 1;
    const isSplit = mishnahData[perek][i]  < mishna + 1;
    return  <>
              <Text>Maseches {masechtos[i]} </Text>
              <Text>Perek {perek} Mishna {mishna} - {(!isSplit) ? mishna + 1 : `Perek ${perek + 1} Mishna 1`}</Text>
            </>;
  }

  render(){
    return (
      <View><Text style={styles.todaysMishnah}>{this.getTodaysMishnah()}</Text></View>
    );
  }
}

const styles = StyleSheet.create({
  todaysMishnah:{
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 25,
    height:200
  }
});
