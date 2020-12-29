import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme, Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch,Linking } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import logo from '../screens/logo.jpg'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


function loadInBrowser() {
    alert("This will leave the app and take you to browser");
};


export function DrawerContent(props) {
    
    const paperTheme = useTheme();

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={require('../screens/logo.jpg')}
                                size={60}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>One World Coin</Title>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Dashboard"
                            onPress={() => { props.navigation.navigate('Dashboard') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="cart-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Buy Crypto"
                            onPress={() => { props.navigation.navigate('Buy Crypto') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="cash-refund"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Back-up Fund"
                            onPress={() => { props.navigation.navigate('Back-up Fund') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="map-marker-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Address"
                            onPress={() => { props.navigation.navigate('Address') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="link-box"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Goods Link"
                            onPress={() => { props.navigation.navigate('Goods Link') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="cellphone-cog"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Services Link"
                            onPress={() => { props.navigation.navigate('Services Link') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="face-agent"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Support "
                            onPress={loadInBrowser}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="cog-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label=" Settings"
                            onPress={() => { props.navigation.navigate('Settings') }}
                        />
                    </Drawer.Section>
                </View>
                
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="exit-to-app"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Log Out "
                            onPress={() => { props.navigation.navigate('SignIn') }}
                        />
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});