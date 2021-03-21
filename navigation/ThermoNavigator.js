import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ConnectDeviceScreen from '../screens/ConnectDeviceScreen'
import DayDetailedScreen from '../screens/DayDetailedScreen'
import DaysScreen from '../screens/DaysScreen'

const ThermoNavigator = createStackNavigator({
    ConnectDevice: ConnectDeviceScreen,
    DayDetailed: DayDetailedScreen,
    Days: DaysScreen
  });
  
  export default createAppContainer(ThermoNavigator);
  