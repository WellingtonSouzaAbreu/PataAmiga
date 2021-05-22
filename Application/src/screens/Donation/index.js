import React, {Component}from 'react'
import { Text, View, StyleSheet, Image, ScrollView} from 'react-native'
import { Input, Button } from 'galio-framework';
import Icon from 'react-native-vector-icons/FontAwesome5'

import styles from './styles.js'

export default class DonationScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <ScrollView indicatorStyle={false} style={styles.scrollContainer}>
                    <View style={styles.imgContainer}>
                         <Image source={require('../../assets/imgs/donation.png')}  style={styles.imgDonation}/>
                    </View>
                    <View style={styles.containerInfoBank}>
                        <Text style={styles.txtTitle}>Doações em dinheiro</Text>
                        <View style={styles.containerInfoDonate}>
                            <View style={styles.iconContainer}>
                                <Icon name="money-check-alt" size={30} color='dimgray' style={{marginRight: 15}}/>
                            </View>
                            <View style={styles.infos}>
                                <Text style={{fontSize: 16, color: '#64718C', fontWeight: 'bold'}}>Banco do Brasil</Text>
                                <Text style={{fontSize: 15, color: 'dimgray'}}>Agência 2173-3 Conta 23.808-2</Text>
                            </View>
                        </View>
                        <View style={styles.containerInfoDonate}>
                            <View style={styles.iconContainer}>
                                <Icon name="amazon-pay" size={30} color='dimgray' style={{marginRight: 15}}/>
                            </View>
                            <View style={styles.infos}>
                                <Text style={{fontSize: 16, color: '#64718C', fontWeight: 'bold'}}>PIX</Text>
                                <Text style={{fontSize: 15, color: 'dimgray'}}>884184112-14</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                
               
            </View>
        )
    }
}