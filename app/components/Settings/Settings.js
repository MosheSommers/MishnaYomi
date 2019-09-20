
import React from 'react';
import { StyleSheet, View, Text, Picker} from 'react-native';
import DatePicker from 'react-native-datepicker';

export default class Settings extends React.Component{
    constructor(props){
        super(props)
        this.state = {date:"2019-08-17"}
      }

    render(){
        return (
            <View style={styles.settings}>
                <Text style={styles.text}>Pick a starting date</Text>
                <DatePicker
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

                <Picker
                  prompt='Hebrew'
                  selectedValue={this.props.isHebrew}
                  style={{height: 100, width: 100}}
                  onValueChange={ (itemValue, itemIndex) => this.props.setLanguage(itemValue) }
                  >
                  <Picker.Item label="Hebrew" value={true} />
                  <Picker.Item label="English" value={false} />
                </Picker>
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
    color: '#000',
    fontWeight: 'bold',
    width:200,
  },
});
