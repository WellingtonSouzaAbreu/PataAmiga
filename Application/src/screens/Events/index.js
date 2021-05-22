import React, {Component}from 'react'
import { Text, View, StyleSheet, Image, ScrollView} from 'react-native'
import { Input, Button } from 'galio-framework';
import Icon from 'react-native-vector-icons/Feather'
import CardEvent from './../../components/EventCard'

import styles from './styles.js'

export default class EventScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.headerElement}>
                    <Image style={styles.eventImageBanner} source={require('./../../assets/imgs/events2.png')}/>
                    <Text style={styles.title}>Confira aqui nossos proximos eventos</Text> 
                </View>
                <View style={styles.containerScroll}>
                    <ScrollView showsVerticalScrollIndicator= {false}>
                        <CardEvent/>
                        <CardEvent/>
                
                    </ScrollView>
                </View>
                
                 
            
            </View>
        )
    }
}