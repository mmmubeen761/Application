import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/FacebookSignin';
import Activity from '../screens/Activity';
import Swap from '../screens/Swap';
import Send from '../screens/Send';
import Receive from '../screens/Recieve';
import Icon from 'react-native-vector-icons/Ionicons';



const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const Dashboard = () => (

    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarLabel: 'Activity',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="document-text-outline" color={color} size={26} />
            ),
        }}
      />
      <Tab.Screen
        name="Swap"
        component={Swap}
        options={{
          tabBarLabel: 'Swap',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="swap-horizontal-outline" color={color} size={26} />
            ),
          }}
      />
          <Tab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarColor: '#1f65ff',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-home" color={color} size={26} />
              ),
            }}
          />
      <Tab.Screen
        name="Send"
        component={Send}
        options={{
          tabBarLabel: 'Send',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="paper-plane-outline" color={color} size={26} />
          ),
        }}
        
      />
      <Tab.Screen
        name="Receive"
        component={Receive}
        options={{
          tabBarLabel: 'Recieve',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="albums-outline" color={color} size={26} />
          ),
        }}
        
      />
    </Tab.Navigator>
);

export default Dashboard;
