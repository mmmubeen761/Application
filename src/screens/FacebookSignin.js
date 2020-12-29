import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Dimensions, TextInput, Platform, StyleSheet, ScrollView, StatusBar, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Home = (props) => {

    return (
        <>
            <ScrollView>

                <View style={styles.textWrapper}>
                    <View style={styles.logincontainer}>
                        <View style={styles.action}>
                            <Icon name="bars" size={20} color="#fff"
                                onPress={() => props.navigation.openDrawer()}
                            />
                            <Text style={styles.textInput}>Dashboard</Text>
                        </View>

                        <View style={styles.actions}>
                            <Icon name="dollar-sign" color={'#00cc22'} size={26} />
                            <Text style={styles.textInputs}>Total Balance {"\n"}$ 0.00 </Text>
                        </View>
                        <View style={styles.actions}>
                            <Icon name="bitcoin" color={'#ff6a00'} size={26} />
                            <Text style={styles.textInputs}>Bitcoin {"\n"}$ 0.00 </Text>
                        </View>
                        <View style={styles.actions}>
                            <Icon name="ethereum" color={'#3600b3'} size={26} />
                            <Text style={styles.textInputs}>Ethereum  {"\n"}$ 0.00 </Text>
                        </View>
                        <View style={styles.actions}>
                            <Icon name="btc" color={'#5eff00'} size={26} />
                            <Text style={styles.textInputs}>Bitcoin Cash {"\n"}$ 0.00 </Text>
                        </View>
                        <View style={styles.actions}>
                            <Icon name="sellcast" color={'#002e54'} size={26} />
                            <Text style={styles.textInputs}>Stellar {"\n"}$ 0.00 </Text>
                        </View>
                        <View style={styles.actions}>
                            <Icon name="artstation" color={'black'} size={26} />
                            <Text style={styles.textInputs}>Algorand {"\n"}$ 0.00 </Text>
                        </View>



                    </View>
                </View>

            </ScrollView>
        </>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%'
    },
    logincontainer: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        // paddingTop: wp('10'),
        color: 'black',
    },
    textWrapper: {
        backgroundColor: '#fff',
        height: hp('100'), // 70% of height device screen
        width: wp('100%'),   // 80% of width device screen
    },
    myText: {
        fontSize: hp('5%') // End result looks like the provided UI mockup
    },
    action: {
        width: ('100%'),   // 80% of width device screen
        flexDirection: 'row',
        paddingTop: 20,
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1f65ff',
        paddingBottom: 18,

    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        color: '#fff',
        fontSize: hp('2.5%'),
        paddingTop: 10,
        paddingLeft: 20,
        fontWeight: 'bold'
    },
    actions: {
        width: ('100%'),   // 80% of width device screen
        flexDirection: 'row',
        paddingTop: 20,
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        paddingBottom: 5,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        paddingBottom: 10,

    },
    textInputs: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: 'black',
        fontSize: hp('3%'),
        paddingTop: 5,
        paddingLeft: 10,
        // color:'#008fb3'
        // paddingBottom: 10,
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
    },
    signIn: {
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
});
