import React, {Component} from 'react'
import { View, Text, TouchableOpacity,Image} from 'react-native'

import styles from './styles'
export default class CardAdopted extends Component{
    render(){
        return(
            <View style={styles.cardAdoption}>
                <Image style={styles.imgAdoption} source={require('./../../assets/imgs/img1.jpg')}/>
                    <View style={styles.groupInfoAdoption}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.txtDate}>Adotado: </Text>
                             <Text style={styles.txtDate}>05/02/2021</Text>
                        </View>
                        <TouchableOpacity  style={styles.btMoreInfo}>
                            <Text style={{color: '#fff', fontWeight: 'bold'}}>
                                História
                            </Text>       
                        </TouchableOpacity>
                    </View>
             </View>
        )
    }
}