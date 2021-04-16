import React, { Component } from 'react'
import { View, Image } from 'react-native'

import styles from './styles'

import AboutNavigation from '../../config/AboutTopNavigation'

export default class AboutScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.AboutTopElement}>
                    <Image style={styles.LogoImg} source={require('./../../assets/imgs/Logo.png')} />
                </View>
                <View style={styles.containerTabs}>
                    <AboutNavigation />
                </View>
            </View>
        )
    }
}
