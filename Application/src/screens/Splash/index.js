import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'


const Splash = () => {
    
    setTimeout(async () => {
        let userInAsyncStorage
        await AsyncStorage.getItem('user', (error, result) => userInAsyncStorage = result)

        if (userInAsyncStorage) {
            axios.defaults.headers.common['Authorization'] = 'bearer ' + userInAsyncStorage.token
            await props.navigation.navigate('Home')
        } else {
            await props.navigation.navigate('Auth')
        }
    }, 1000)


    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text>I am Splash Screen!</Text>
        </View>
    )
}



export default Splash