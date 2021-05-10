import React, {Component}from 'react'
import { Text, View, StyleSheet, Image, ScrollView} from 'react-native'
import { Input, Button } from 'galio-framework';
import Icon from 'react-native-vector-icons/Feather'

import styles from './styles.js'

export default class CardEvent extends Component {
    render(){
        return(
            <View style={styles.container}>
               <Image style={styles.cardImage} source={require('./../../assets/imgs/img2.jpg')} />
            
            </View>
        )
    }
}