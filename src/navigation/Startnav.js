import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './navigation';
import MainScreen from '../screens/MainScreen';
import SignIn from '../screens/Signin';
import SignUp from '../screens/Signup';
// import Mixx from '../screens/Mixx';

const Stack = createStackNavigator();

function StartNavigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Navigation" component={Navigation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default StartNavigation;

