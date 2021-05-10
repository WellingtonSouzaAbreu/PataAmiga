import React, { Component } from 'react'
import { Text, View, StyleSheet, Image} from 'react-native'

import styles from './styles.js'

export default class AboutTab2 extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.txtStatic}>Nós resgatamos cães abandonados e vitimas de maus tratos.</Text>
                <Image style={styles.imgAboutDo} source={require('./../../assets/imgs/abt1.jpg')}/>
                <Text style={styles.txtStatic}>Cuidamos deles até ficarem saudáveis e então procuramos um novo lar para eles.</Text>
                <Image style={styles.imgAboutDoVetor} source={require('./../../assets/imgs/dogVe.png')}/>
            </View>
        )
    }
}