import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../../screens/WelcomeScreen';
import HomeScreen from '../../screens/HomeScreen';
import {RootStackParamList} from '../../config/types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Stack = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Welcome" component={WelcomeScreen} />
        <RootStack.Screen name="Home" component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Stack;
