import React, {Component}from 'react'
import { Text, View, StyleSheet, Image} from 'react-native'
import { Input, Button,Radio  } from 'galio-framework';
import Icon from 'react-native-vector-icons/Feather'

import styles from './styles.js'

export default class Report extends Component {
    render(){
        return(
            <View style={styles.container}>
               <View style={styles.boxElement}></View>
               <View style={styles.boxFormReport}>
                    <Text style={{fontSize: 19,color: 'gray', margin: 5}}>Fazer uma denuncia</Text>
                    <Text style={{fontSize: 16, color: 'gray'}}>Informe o tipo de denuncia</Text>

                    <Input placeholder="regular" label="Endereço" />
                    <Input style={{height:100}} placeholder="regular" label="Informações adicionais"/>
                    <Button color="#FA5252">DENUNICIAR</Button>
                   
               </View>
            </View>
        )
        
    }
}