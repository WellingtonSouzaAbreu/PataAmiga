import React, { Component } from "react";
import { View, Text, Image, Alert } from "react-native";
import { Input, Button } from 'galio-framework';
import axios from "axios";
import  AsyncStorage  from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/Feather'


import styles from './styles'

import { baseApiUrl } from './../../common/baseApiUrl.js'

const initialState = {
    cellNumber: '9 8446-5997',
    password: '12345'
}

class Login extends Component {

    state = { ...initialState }

    applyMaskToCellNumber = (text) => {
        let formatedText = text

        if (text.length == 1 && this.state.cellNumber.length < text.length) {
            formatedText += ' '
        }

        if (text.length == 6 && this.state.cellNumber.length < text.length) {
            formatedText += '-'
        }

        this.setState({ cellNumber: formatedText })
    }

    login = async () => {
        
        try{

        await axios.post(`${baseApiUrl}/signin`, { cellNumber: this.state.cellNumber, password: this.state.password })
            .then(async res => {
                let user = res.data
                await AsyncStorage.setItem('user', JSON.stringify(user))
                axios.defaults.headers.common['Authorization'] = 'bearer ' + user.token

                await this.props.navigation.navigate('Home')
            })
            .catch(err => {
                Alert.alert('Erro', err.response.data)
            })
        }catch(error){
            console.log(error)
        }

    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoSloganArea}>
                    <Image style={styles.logoImg} source={require('./../../assets/imgs/Logo.png')} />
                    <View style={styles.sloganArea}>
                        <Text style={styles.slogan}>Ajude a salvar um a vida de um cãozinho</Text>
                        <Text style={styles.slogan}>Adote.</Text>
                    </View>
                </View>

                <View style={styles.form}>
                    <Text style={{ fontSize: 18 }}>BEM VINDO</Text>
                    <Input
                        placeholder="Usuário"
                        right
                        icon="user"
                        family="antdesign"
                        iconSize={18}
                        iconColor="black"
                        maxLength={11}
                        value={this.state.cellNumber}
                        onChangeText={this.applyMaskToCellNumber}
                        keyboardType='numeric'
                    />
                    <Input placeholder="password" password viewPass
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                    />
                    <Text style={{ alignSelf: 'flex-start' }}>Esqueci minha senha.</Text>
                    <Button style={styles.button} color="#4682B4" onPress={this.login}>Entrar</Button>
                    <Button style={styles.button} color="#6495ED">Cadastrar</Button>
                </View>
            </View>
        );
    }

}

export default Login

