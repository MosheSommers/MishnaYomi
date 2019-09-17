
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import DatePicker from 'react-native-datepicker';

export default class Settings extends React.Component{
    constructor(props){
        super(props)
        this.state = {date:"2019-08-17"}
      }

    render(){
        return (
            <View style={styles.settings}>
                <Text>Pick a strarting date</Text>
                <DatePicker
                    style={styles.text}
                    date={this.props.startDate}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    }}
                    onDateChange={(date) => {this.props.setDate(date)}}
                />
          </View>
        )
      }
}

const styles = StyleSheet.create({
  settings:{
    textAlign: "right", 
    fontWeight: 'bold',
    fontSize: 25,
    height:200,
    alignSelf:'center'
  },
  text: {
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 25,
    width:200,
  },
});
