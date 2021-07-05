import React, { Component } from "react";
import { View, Text, Image, Alert, StatusBar, TouchableOpacity } from "react-native";
import { Input, Button } from 'galio-framework';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from './styles'

import { baseApiUrl } from './../../common/baseApiUrl.js'

const initialState = {
    name: 'Wellington Souza',
    cellNumber: '69 98446-5997',
    password: '123',
    confirmPassword: '123',

    newUser: false
}

class Login extends Component {

    state = { ...initialState }

    applyMaskToCellNumber = (text) => {
        let formatedText = text

        if (text.length == 2 && this.state.cellNumber.length < text.length) {
            formatedText += ' '
        }

        if (text.length == 8 && this.state.cellNumber.length < text.length) {
            formatedText += '-'
        }

        this.setState({ cellNumber: formatedText })
    }

    signinOrSignup = () => {
        if (this.state.newUser) {
            this.signup()
        } else {
            this.signin()
        }
    }

    signin = async () => {
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
    }

    signup = async () => {
        let user = {
            name: this.state.name,
            cellNumber: this.state.cellNumber,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }

        await axios.post(`${baseApiUrl}/signup`, { user })
            .then(res => Alert.alert('Oba!', 'Seu cadastro foi realizado com sucesso!'))
            .catch(err => {
                console.log(err)
                Alert.alert('Ops!', 'Ocorreu um erro ao realizar o seu cadastro.')
            })
    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar />
                <View style={styles.logoSloganArea}>
                    <Image style={styles.logoImg} source={require('./../../assets/imgs/Logo.png')} />
                    <View style={styles.sloganArea}>
                        <Text style={styles.slogan}>Ajude a salvar um a vida de um cãozinho</Text>
                        <Text style={styles.slogan}>Adote.</Text>
                    </View>
                </View>

                <View style={styles.form}>
                    <Text style={styles.formTitle}>{this.state.newUser ? 'Insira seus dados' : 'Bem vindo'}</Text>
                    {
                        this.state.newUser &&
                        <Input placeholder="Insira seu nome...."
                            value={this.state.name}
                            onChangeText={(name) => this.setState({ name })}
                        />
                    }
                    <Input
                        placeholder="Usuário"
                        right
                        icon="user"
                        family="antdesign"
                        iconSize={18}
                        iconColor="black"
                        maxLength={13}
                        value={this.state.cellNumber}
                        onChangeText={this.applyMaskToCellNumber}
                        keyboardType='numeric'
                    />
                    <Input placeholder="Senha..." password viewPass
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                    />
                    {this.state.newUser &&
                        <Input placeholder="Repita sua senha..." password viewPass
                            value={this.state.confirmPassword}
                            onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
                        />
                    }
                    {
                        !this.state.newUser &&
                        <TouchableOpacity style={{ alignSelf: 'flex-start' }} onPress={() => Alert.alert('Hahaha!', 'Problema seu!')}>
                            <Text style={{ alignSelf: 'flex-start', textDecorationLine: 'underline' }}>Esqueci minha senha.</Text>
                        </TouchableOpacity>
                    }
                    <Button style={styles.button} color="#4682B4" onPress={this.signinOrSignup}>{this.state.newUser ? 'Cadastrar' : 'Entrar'}</Button>
                </View>
                <TouchableOpacity style={styles.registerButton} onPress={() => { this.setState({ newUser: !this.state.newUser }) }}>
                    <Text style={styles.textButton}>{this.state.newUser ? 'Já possui conta?' : 'Ainda não possui conta?'}</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

export default Login

