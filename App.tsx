import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './app/Home.js';
import FlexDesign from './app/ui/FlexDesign.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Welcome'}}
      />
       <Stack.Screen
        name="FlexDesign"
        component={FlexDesign}
      />
    
    </Stack.Navigator>
  </NavigationContainer>
  );
}


