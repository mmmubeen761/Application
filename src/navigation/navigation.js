import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import FacebookNoti from '../screens/FacebookNoti';
import FacebookSetting from '../screens/FacebookSetting';
import FacebookProfile from '../screens/FacebookProfile';
import FacebookSignin from '../screens/FacebookSignin';
import Dashboard from '../screens/Dashboard';
import BuyCripto from '../screens/Buycripto';
import Backup from '../screens/BackupFund';
import Address from '../screens/Address';
import Goods from '../screens/Goodslink';
import Services from '../screens/Serviceslink';
import Settings from '../screens/Setting';
import Support from '../screens/Support';
import Logout from '../screens/Logout';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DrawerContent} from './DrawerCont'
import SignIn from '../screens/Signin'
import SignUp from '../screens/Signup'
import StartNavigation from './Startnav';

const Drawer = createDrawerNavigator();

export default function Navigation(props) {
  return (
     
      <Drawer.Navigator initialRouteName="Dashboard" drawerContent={props => <DrawerContent {...props}/> }>
        <Drawer.Screen name="Dashboard" component={Dashboard} options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="home"
              size={size}
              color={'#00a2ff'}
            />
          ),
        }} />
        <Drawer.Screen name="Buy Crypto" component={BuyCripto} options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="shopping-cart"
              size={size}
              color={'#00a2ff'}
            />
          ),
        }} />
        <Drawer.Screen name="Back-up Fund" component={Backup} options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="home"
              size={size}
              color={'#00a2ff'}
            />
          ),
        }} />
        <Drawer.Screen name="Address" component={Address} options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="map-marker"
              size={size}
              color={'#00a2ff'}
            />
          ),
        }} />
        <Drawer.Screen name="Goods Link" component={Goods} options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="shopping-bag"
              size={size}
              color={'#00a2ff'}
            />
          ),
        }} />
        <Drawer.Screen name="Services Link" component={Services} options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="cogs"
              size={size}
              color={'#00a2ff'}
            />
          ),
        }} />
        <Drawer.Screen name="Support" component={Support} options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="question-circle"
              size={size}
              color={'#00a2ff'}
            />
          ),
        }} />
        <Drawer.Screen name="Settings" component={Settings} options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="cog"
              size={size}
              color={'#00a2ff'}
            />
          ),
        }} />
        <Drawer.Screen name="StartNavigation" component={Dashboard} options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="sign-out"
              size={size}
              color={'#00a2ff'}
            />
          ),
        }} />
          <Drawer.Screen name="SignIn" component={SignIn} options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="sign-out"
              size={size}
              color={'#00a2ff'}
            />
          ),
        }} />
          <Drawer.Screen name="SignUp" component={SignUp} options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="sign-out"
              size={size}
              color={'#00a2ff'}
            />
          ),
        }} />
      </Drawer.Navigator>
  );
}





