import {Text,View, StyleSheet, Button} from 'react-native';
import React , {useState} from 'react'

import DeviceList from '../components/DeviceList'
let myCounter = 1

function onConnectDevice(value){
    console.log("Connect to Device : " , value)    
}


const ConnectDeviceScreen = props => {
    const[scanButtonTitle,setScanButtonTitle] = useState('Scan BLE Devices')
    const[isDisplayDeviceList,setIsDisplayDeviceList] = useState(false)
    const[foundDevices,setFoundDevices] = useState([])

    
    

    const ScanBLEDevices = () =>{
        if(scanButtonTitle === 'Scan BLE Devices')
        {
            setFoundDevices([...foundDevices,{id: String(myCounter++) , name: 'Bluetooh Device '+myCounter}])
            setIsDisplayDeviceList(true)
            setScanButtonTitle('Stop')
        }
        else{
            setIsDisplayDeviceList(false)
            setScanButtonTitle('Scan BLE Devices')
        }
    }

    return(
        <View style={styles.screen}>
            <Text style={styles.descriptionText}>Connect Device Screen</Text>
            <View style={styles.buttonContainer}>
                <Button title={scanButtonTitle} onPress={ScanBLEDevices}/>
            </View>
            {isDisplayDeviceList ? <DeviceList devices={foundDevices} onConnect={onConnectDevice} /> : null}
            <View style={styles.buttonContainer}>
            <Button title="Go to Days" style={styles.button} onPress={()=>{props.navigation.navigate('Days')}}/>
            </View>

        </View>
        
    );

}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: 'center',
        
    },
    descriptionText:{
        fontSize: 25,
        margin: 20
    },
    buttonContainer:{
        margin: 20
    }

});

export default ConnectDeviceScreen;