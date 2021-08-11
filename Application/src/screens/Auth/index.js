import React, { Component } from "react";
import { View, Text, Image, Alert, StatusBar, TouchableOpacity } from "react-native";
import { Input, Button } from 'galio-framework';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from './styles'

import { baseApiUrl } from './../../common/baseApiUrl.js'
import AuthInput from "../../components/AuthInput";

const initialState = {
    name: null,
    cellNumber: '55 55555-5555',
    password: '5555',
    confirmPassword: null,

    newUser: false,
    passwordHidden: true,
    confirmPasswordHidden: true
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
            .then(res => {
                Alert.alert('Oba!', 'Seu cadastro foi realizado com sucesso!')
                this.setState({
                    newUser: false,
                    name: null,
                    confirmPassword: null
                })
            })
            .catch(err => {
                console.log(err)
                Alert.alert('Ops!', err.response.data)
            })
    }

    cleanInputAndFocus = () => {
        // this.nameInput.onFocus() // TODO adicionar foco
        this.setState({ ...initialState, newUser: !this.state.newUser })
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
                        <AuthInput icon='user' placeholder='Nome....' /* autoFocus={true} */
                            value={this.state.name} 
                            onChangeText={(name) => this.setState({ name })}
                        />
                    }

                    <AuthInput icon='phone' placeholder="Número de celular..." /* autoFocus={true} */
                        keyboardType='numeric' maxLength={13}
                        value={this.state.cellNumber}
                        onChangeText={this.applyMaskToCellNumber}
                    />

                    <AuthInput icon={this.state.passwordHidden ? 'eye' : 'eye-slash'} placeholder="Senha..." keyboardType='numeric'
                        value={this.state.password} secureTextEntry={this.state.passwordHidden}
                        onChangeText={(password) => this.setState({ password })}
                        onToggleVisibility={() => this.setState({passwordHidden: !this.state.passwordHidden})}
                    />

                    {
                        this.state.newUser &&
                        <AuthInput icon={this.state.confirmPasswordHidden ? 'eye' : 'eye-slash'}  placeholder="Repetir senha..." keyboardType='numeric'
                            value={this.state.confirmPassword} secureTextEntry={this.state.confirmPasswordHidden}
                            onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
                            onToggleVisibility={() => this.setState({confirmPasswordHidden: !this.state.confirmPasswordHidden})}
                        />
                    }
                    {
                        !this.state.newUser &&
                        <TouchableOpacity style={styles.forgetPassword} onPress={() => Alert.alert('Hahaha!', 'Problema seu!')}>
                            <Text style={styles.forgetPasswordText}>Esqueci minha senha.</Text>
                        </TouchableOpacity>
                    }
                    <Button style={styles.button} color="#4682B4" onPress={this.signinOrSignup}>{this.state.newUser ? 'Cadastrar' : 'Entrar'}</Button>
                </View>
                <TouchableOpacity style={styles.registerButton} onPress={this.cleanInputAndFocus}>
                    <Text style={styles.textButton}>{this.state.newUser ? 'Já possui conta?' : 'Ainda não possui conta?'}</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

export default Login

