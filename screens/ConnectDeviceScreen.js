import {Text,View, StyleSheet, Button} from 'react-native';
import React , {useState} from 'react'
const ConnectDeviceScreen = props => {
    const[scanButtonTitle,setScanButtonTitle] = useState('Scan BLE Devices')

    const ScanBLEDevices = () =>{
        if(scanButtonTitle === 'Scan BLE Devices')
        {
            setScanButtonTitle('Scanningggg...')
        }
        else{
            setScanButtonTitle('Scan BLE Devices')
        }
    }

    return(
        <View style={styles.screen}>
            <Text style={styles.descriptionText}>Connect Device Screen</Text>
            <View style={styles.buttonContainer}>
                <Button title={scanButtonTitle} onPress={ScanBLEDevices}/>
            </View>

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