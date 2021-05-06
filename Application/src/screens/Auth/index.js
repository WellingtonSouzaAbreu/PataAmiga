import React, { Component } from "react";
import { View, Text, Image, Alert } from "react-native";
import { Input, Button } from 'galio-framework';
import axios from "axios";
import Icon from 'react-native-vector-icons/Feather'

import styles from './styles'

import { baseApiUrl } from './../../common/baseApiUrl.js'

const initialState = {
    cellNumber: '9 5997-7089',
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
        await axios.post(`${baseApiUrl}/signin`, { cellNumber: this.state.cellNumber, password: this.state.password })
            .then(res => {
                console.log(res.data)
                Alert.alert('Sucesso', 'Usuário logado!')
            })
            .catch(err => Alert.alert('Erro', err.response.data))
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoSloganArea}>
                    <Image style={styles.logoImg} source={require('./../../assets/imgs/Logo.png')} />
                    <View style={styles.sloganArea}>
                        <Text style={styles.slogan}>Ajude a salvar um a vida de um cãozinho. Adote.</Text>
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

