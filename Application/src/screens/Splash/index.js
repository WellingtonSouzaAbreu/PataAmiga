import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'


const Splash = (props) => {

    const switchRoute = async () => {
        let userInAsyncStorage = false

        await AsyncStorage.getItem('user', (error, result) => {
            console.log(result)
            console.log(error)

            if (!error && result) {
                userInAsyncStorage = true
                axios.defaults.headers.common['Authorization'] = 'bearer ' + JSON.parse(result).token
            }

        })

        setTimeout(async () => {
            if (userInAsyncStorage) {
                await props.navigation.navigate('Home')
            } else {
                await props.navigation.navigate('Auth')
            }
        }, 1000)
    }

    switchRoute()

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text>I am Splash Screen!</Text>
        </View>
    )
}



export default Splash