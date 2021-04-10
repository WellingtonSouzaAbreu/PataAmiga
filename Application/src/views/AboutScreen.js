import React, {Component}from 'react'
import { Text, View, StyleSheet, Image} from 'react-native'

import AboutNavigation from './AboutTopNavigation'

export default class AboutScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.AboutTopElement}>
                    <Image style={styles.LogoImg} source={require('./../assets/images/Logo.png')}/>  
                </View>
                <View style={styles.containerTabs}>
                    <AboutNavigation/>
                </View>
            
                
            </View>
        )
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    AboutTopElement: {
        alignSelf: 'stretch',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },

    LogoImg: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    containerTabs: {
        flex: 1,
        alignSelf: 'stretch'
    }
})