import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Picker } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme, Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switc } from 'react-native-paper';


const SignIn = (props) => {
    const [data, setData] = React.useState({
        username: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });



    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }


    return (
        <>

            <View style={styles.actio}>
                <Icon name="arrow-left" size={20} color="#fff"
                    onPress={() => props.navigation.goBack()}
                />
                <Text style={styles.textInpu}>Sign In</Text>
            </View>

                <View style={styles.container}>
                    <View style={styles.logincontainer}>
                        <View style={styles.userInfoSection}>
                            <View style={{ flexDirection: 'row' }}>
                                <Avatar.Image
                                    source={require('../screens/logo.jpg')}
                                    size={200}
                                />
                            </View>
                        </View>
                        <View style={styles.action}>
                            <FontAwesome
                                name="user"
                                color="black"
                                size={25}
                            />
                            <TextInput
                                placeholder="Your Username"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => textInputChange(val)}
                            />
                        </View>

                        <View style={styles.action}>
                            <FontAwesome
                                name="lock"
                                color="black"
                                size={25}
                            />
                            <TextInput
                                placeholder="Your Password"
                                placeholderTextColor="black"
                                secureTextEntry={data.confirm_secureTextEntry ? true : false}
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => handlePasswordChange(val)}
                            />
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity
                                style={styles.signIn}
                                onPress={() => {
                                    if (data.username && data.password === '') {
                                        alert("Enter Email and Password")
                                    } else {
                                        props.navigation.navigate("Navigation")
                                    }
                                }

                                }
                            >
                                <LinearGradient
                                    colors={['#5486eb', '#5486eb']}
                                    style={styles.signIn}
                                >
                                    <Text style={[styles.textSign, {
                                        color: '#fff',
                                    }]}>Log In</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

        </>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height:'100%'
    },
    logincontainer: {
        height: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
    },
    textWrapper: {
        backgroundColor: 'black',
        height: hp('100%'), // 70% of height device screen
        width: wp('100%'),   // 80% of width device screen
    },
    myText: {
        fontSize: hp('5%') // End result looks like the provided UI mockup
    }, userInfoSection: {
        paddingLeft: 20,
    },
    action: {
        width: ('80%'),   // 80% of width device screen
        flexDirection: 'row',
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingBottom: 5,
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: 'black',
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
        width: '90%',

    },
    signIn: {
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }, actio: {
        width: ('100%'),   // 80% of width device screen
        flexDirection: 'row',
        paddingTop: 20,
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5486eb',
        paddingBottom: 18,

    },
    textInpu: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        color: '#fff',
        fontSize: hp('2.5%'),
        paddingTop: 10,
        paddingLeft: 20,
        fontWeight: 'bold'
    },
});
