import {Text,View, StyleSheet, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';

const Day = props => {
    return(
        <TouchableOpacity onPress={()=>{props.onSelect(props.title)}} style={styles.dayContainer}>
        <View>
            <Text>{props.title} is here</Text>
        </View>
        </TouchableOpacity>
    )
}
const DaysScreen = props => {
    const deviceName = props.navigation.getParam('device');
    const [selectedDay,setSelectedDay] = useState()
    const showDayDetail = day => {
        console.log("selected day ",day)
    }

    return(
        <View style={{flex: 1}}>
            <Text>{deviceName} Thermometer Configuration</Text>
            <Text>Current Temperature is 23 C.</Text>
            <View style={styles.weekContainer}>
                <Day title="Monday" onSelect={showDayDetail}></Day>
                <Day title="Tuesday" onSelect={showDayDetail}></Day>
                <Day title="Wednesday" onSelect={showDayDetail}></Day>
                <Day title="Thursday" onSelect={showDayDetail}></Day>
                <Day title="Friday" onSelect={showDayDetail}></Day>
                <Day title="Saturday" onSelect={showDayDetail}></Day>
                <Day title="Sunday" onSelect={showDayDetail}></Day>
            </View>
            
        </View>
    );

}

const styles = StyleSheet.create({
    weekContainer:{
        flex: 1,
        backgroundColor: 'yellow'
    },
    dayContainer:{
        flex: 1,
        marginVertical: 10,
        backgroundColor: 'green'

    },

});

export default DaysScreen;