import React, {Component} from 'react'
import {View, ScrollView, Text} from 'react-native'
import styles from './styles'

export default class ProfileScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.boxTxtSugestion}></View>
                <View style={styles.boxInfoName}>
                    <Text style={styles.txtTitle}>LUCAS MARTINS</Text>
                    <Text style={styles.txtInfo}>Para adotar você precisa preencher algumas informações, não se preocupe é muito rápido e fácil.</Text>
                </View>
                <Text style={{fontSize: 18, marginVertical: 15}}>
                    INFORMAÇÕES COMPLEMENTARES
                </Text>

                <View style={styles.containerInfos}>
                    <View style={styles.boxInfo1}>
                        <View style={styles.titleBox}>
                            <Text>CONTATOS</Text>
                        </View>
                        <View style={styles.contentBoxInfo}>
                            <Text>Telefone</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}