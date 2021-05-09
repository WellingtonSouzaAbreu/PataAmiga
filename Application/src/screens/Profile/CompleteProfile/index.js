import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput ,Image} from 'react-native'
import styles from './styles'
import { Input, Block } from 'galio-framework';
import { Button } from 'galio-framework';
import Icon from 'react-native-vector-icons/Feather'


export default class CompleteProfile extends Component{
    render(){
        return(
            <View style={styles.container}>
              <Image style={styles.imgAsset} source={require('./../../../assets/imgs/profileaddinfo.png')}/>
                <Text style={{textAlign: 'center', fontSize: 16, marginBottom: 15}}>Estas Informações são necessárias para o procedimento de adoção</Text>
              <View style={styles.formCompletePefil}>
                <TextInput style={styles.inputEmail} placeholder="Email" />
                <TextInput style={styles.inputEmail} placeholder="RG" />
                <TextInput style={styles.inputEmail} placeholder="RUA" />
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