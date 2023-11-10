import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import Principal from './components/Principal';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerStyle: {
              backgroundColor: '#dc0a2d', 
              
            },
          }}
        />
        <Stack.Screen
          name="Principal"
          component={Principal}
          options={{
            headerStyle: {
              backgroundColor: '#dc0a2d',
            },
          }}
        />
        
      </Stack.Navigator>
      

      
      
    </NavigationContainer>
  );
};

export default AppNavigator;