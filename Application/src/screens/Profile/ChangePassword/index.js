import React, {Component} from 'react'
import {View, Text, TouchableOpacity,ScrollView, TextInput ,Image} from 'react-native'
import styles from './styles'



export default class ChangePassword extends Component{
    render(){
        return(
            <ScrollView style={styles.container}>
                
                <View style={styles.formChangeMailPassword}>
                    <View style={styles.boxChangeEmail}>
                        <Text style={styles.txtTitleCard}>Alterar Email</Text>
                        <View style={styles.containerInputs}>
                            <TextInput style={styles.inputChange} placeholder="Email atual" />
                            <TextInput style={styles.inputChange} placeholder="Novo email" />
                            <TextInput style={styles.inputChange} placeholder="Senha" />
                            <TouchableOpacity style={styles.btChange}>
                                <Text style={{fontSize: 15, color: '#fff', fontWeight: 'bold'}}>Alterar</Text>
                            </TouchableOpacity>
                            
                        </View>
                       
                    </View>

                    <View style={styles.boxChangeEmail}>
                        <Text style={styles.txtTitleCard}>Alterar Email</Text>
                        <View style={styles.containerInputs}>
                            <TextInput style={styles.inputChange} placeholder="Senha atual" />
                            <TextInput style={styles.inputChange} placeholder="Nova senha" />
                            <TextInput style={styles.inputChange} placeholder="Confirme a nova senha" />
                            <TouchableOpacity style={styles.btChange}>
                                <Text style={{fontSize: 15, color: '#fff', fontWeight: 'bold'}}>Alterar</Text>
                            </TouchableOpacity>
                        </View>
                       
                    </View>

                </View>
            </ScrollView>
            
        )
    }
}