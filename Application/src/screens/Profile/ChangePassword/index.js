import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput ,Image} from 'react-native'
import styles from './styles'
import { Input, Block } from 'galio-framework';
import { Button } from 'galio-framework';
import Icon from 'react-native-vector-icons/Feather'


export default class ChangePassword extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.formChangeMailPassword}>
                    <View style={styles.boxChangeEmail}>
                        <Text style={styles.txtTitleCard}>Alterar Email</Text>
                        <View style={styles.containerInputs}>
                            <TextInput style={styles.inputChange} placeholder="Email atual" />
                            <TextInput style={styles.inputChange} placeholder="Novo email" />
                            <TextInput style={styles.inputChange} placeholder="Senha" />
                            <Button color="info" style={styles.btChange}>Alterar</Button>
                        </View>
                       
                    </View>

                    <View style={styles.boxChangeEmail}>
                        <Text style={styles.txtTitleCard}>Alterar Email</Text>
                        <View style={styles.containerInputs}>
                            <TextInput style={styles.inputChange} placeholder="Senha atual" />
                            <TextInput style={styles.inputChange} placeholder="Nova senha" />
                            <TextInput style={styles.inputChange} placeholder="Confirme a nova senha" />
                            <Button color="info" style={styles.btChange}>Alterar</Button>
                        </View>
                       
                    </View>

                </View>
            </View>
            
        )
    }
}