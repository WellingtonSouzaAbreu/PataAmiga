import React,{Component} from 'react'
import { View, Text, ScrollView, Image,TouchableOpacity} from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useLinkProps } from '@react-navigation/native'

const OpenMenu = ()=> {
    navigation.openDrawer()
}


export default function HeaderMain({ navigation}) {
    
        return(
            <View style={styles.container} onPress={OpenMenu} >
                <TouchableOpacity style={styles.btnMenuDrawer} onPress={navigation.ToggleDrawer}>
                    <Icon name="bars" size={25} color='#64718C' style={{marginVertical: 2}}/>
                </TouchableOpacity>
                <View style={styles.groupLogoTitle}> 
                    <Image style={styles.logoImg} source={require('./../../assets/imgs/Logo.png')}/>
                    <Text style={styles.txtTitle}>Pata Amiga</Text>
                </View>
            
            <Icon name="sign-out-alt" size={25} color='#64718C' style={{marginVertical: 2}}/>
                
            </View>
        )
    
}

