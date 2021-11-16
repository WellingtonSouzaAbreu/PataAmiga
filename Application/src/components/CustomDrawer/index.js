import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
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
                        <Text style={styles.txtPresentation}>Pata Amiga</Text>
                        <Text style={styles.txtPresentation}>@associacaopataamiga</Text>
                    </View>
                </View>
                <DrawerNavigatorItems {...props} />
            </ScrollView>
        </View>
    )
}

export default CustomDrawer


