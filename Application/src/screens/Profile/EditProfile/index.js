import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput ,Image} from 'react-native'
import styles from './styles'
import { Input, Block } from 'galio-framework';
import { Button } from 'galio-framework';
import Icon from 'react-native-vector-icons/Feather'


export default class EditProfile extends Component{
    render(){
        return(
            <View style={styles.container}>
             
              <View style={styles.formCompletePefil}>
                 <TextInput style={styles.inputEmail} placeholder="Nome" />
                 <TextInput style={styles.inputEmail} placeholder="RG" />
                <TextInput style={styles.inputEmail} placeholder="Email" />
                
                <TextInput style={styles.inputEmail} placeholder="Rua" />
                <TextInput style={styles.inputEmail} placeholder="Telefone" />
                <TextInput style={styles.inputEmail} placeholder="Celular" />
                <View style={styles.containerInput}>
                    <TextInput style={styles.inputAndress} placeholder="Número " />
                    <TextInput style={styles.inputAndress} placeholder="Bairro" />
                </View>
                <View style={styles.containerInput}>
                    <TextInput style={styles.inputAndress} placeholder="Cidade " />
                    <TextInput style={styles.inputAndress} placeholder="Estado" />
                </View>
                
              </View>
              <Button color="info" style={styles.btSave}>Salvar</Button>
            </View>
        )
    }
}