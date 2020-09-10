import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    NavigationContainer
} from '@react-navigation/native';
import { Login, Dashboard } from '@containers'

const Stack = createStackNavigator();

const AppContainer = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" options={{ headerShown: false }}>{props => (<Login {...props} />)}</Stack.Screen>
            <Stack.Screen name="Dashboard" options={{ headerShown: false }} >{props => <Dashboard {...props} />}</Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer >
);

export {
    AppContainer
};