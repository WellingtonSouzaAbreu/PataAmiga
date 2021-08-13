import React, { Component } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function HeaderMain({ navigation }) {

    const OpenMenu = () => {
        navigation.openDrawer()
    }

    const navigateToSignin = async () => {
        await AsyncStorage.removeItem('user')
        axios.defaults.headers.common['Authorization'] = ''
        navigation.navigate('Auth')
    }

    return (
        <View style={styles.container}  >
            <TouchableOpacity style={styles.menuDrawerButton} onPress={OpenMenu}>
                <Icon name="bars" size={25} color='#64718C' style={{ marginVertical: 2 }} />
            </TouchableOpacity>
            <View style={styles.logoTitleGroup}>
                <Image style={styles.logoImage} source={require('./../../assets/imgs/Logo.png')} />
                <Text style={styles.title}>Pata Amiga</Text>
            </View>

            <TouchableOpacity onPress={navigateToSignin}>
                <Icon name="sign-out-alt" size={25} color='#64718C' style={{ marginVertical: 2 }} />
            </TouchableOpacity>

        </View>
    )

}

