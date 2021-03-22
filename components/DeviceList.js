import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";


const DeviceList = (props) => {


  const connectPressHandler = (name) => {
    props.onConnect(name)
  }

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity style={styles.touchableArea} onPress={connectPressHandler.bind(this,item.name)}>
      <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={props.devices}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    item:{
        flex: 1,
        margin: 10,
        width : '100%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        
    },
    touchableArea: {
        flex: 1,
        width : '100%',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color: 'white',
        fontSize: 25,
    },
    listContainer:{
        flex: 1,
        width : '90%'

    },
});

export default DeviceList;
