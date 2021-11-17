import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import styles from './styles'

import { DrawerNavigatorItems } from 'react-navigation-drawer'


function CustomDrawer({ ...props }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.drawerContainerInfos}>
                    <View style={styles.containerImg}>
                        <Image style={styles.logoImg} source={require('./../../assets/imgs/Logo.png')} />
                    </View>
                    <View style={styles.presentationDrawerContainer}>
                        <View style={styles.socialMedias}>
                            <TouchableOpacity style={styles.media} onPress={() => Linking.openURL('http://api.whatsapp.com/send?phone=+5569992846582')}>
                                <Icon name='whatsapp' size={30} color='#34af23' />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.media} onPress={() => Linking.openURL('https://www.facebook.com/associacaopataamiga/')}>
                                <Icon name='facebook' size={30} color='#3b5998' />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.media} onPress={() => Linking.openURL('https://www.instagram.com/associacaopataamiga/?hl=pt-br')}>
                                <Icon name='instagram' size={30} color='#3f729b' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <DrawerNavigatorItems {...props} />
            </ScrollView >
        </View >
    )
}

export default CustomDrawer


