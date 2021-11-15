import React, { Component } from "react";
import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import { Input, Button } from 'galio-framework';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from './styles'

import { baseApiUrl } from './../../common/baseApiUrl.js'
import AuthInput from "../../components/AuthInput";
import { showAlert } from "../../common/commonFunctions";

const initialState = {
    name: null,
    cellNumber: '',
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
        const textLength = text.length
        const writing = this.state.cellNumber.length < text.length

        console.log(textLength)
        if (writing) {
            switch (textLength) {
                case 1:
                    formatedText = `+55 (69) ${text}`
                    break
                case 15:
                    formatedText = `${text.substring(0, text.length - 1)}-${text.substring(text.length - 1, text.length)}`
                    break
            }
        } else {
            if (textLength == 8) formatedText = `+55 (69) `
            if (textLength == 15) formatedText = text.substring(0, text.length - 1)
        }

        this.setState({ cellNumber: formatedText })
    }

    forgotPassword = async () => {
        await axios.post(`${baseApiUrl}/generate-recovery-password`, { user: this.state.cellNumber })
            .then(async (res) => {
                if (res.data.recoveryType == 'email') {
                    showAlert('Pronto!', 'Foi enviado uma mensagem de recuperação de senha para o seu email')
                } else {
                    showAlert('Pronto!', 'Foi enviado uma mensagem de recuperação de senha para o seu celular')
                }
            })
            .catch(err => {
                console.log(err)
                showAlert('Ops!', err.response ? err.response.data : 'Houve um erro ao lhe enviar a mensagem de recuperação')
            })
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
                showAlert('Ops!', err.response ? err.response.data : 'Ocorreu um erro ao tentar acessar o aplicativo, verifique sua conexão!')
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
                showAlert('Pronto!', 'Seu cadastro foi realizado com sucesso!')
                this.setState({
                    newUser: false,
                    name: null,
                    confirmPassword: null
                })
            })
            .catch(err => {
                console.log(err)
                showAlert('Ops!', err.response ? err.response.data : 'Ocorreu um erro ao realizar seu cadastro!')
            })
    }

    cleanInputs = () => {
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
                        keyboardType='numeric' maxLength={19}
                        value={this.state.cellNumber}
                        onChangeText={this.applyMaskToCellNumber}
                    />

                    <AuthInput icon={this.state.passwordHidden ? 'eye' : 'eye-slash'} placeholder="Senha..." keyboardType='numeric'
                        value={this.state.password} secureTextEntry={this.state.passwordHidden}
                        onChangeText={(password) => this.setState({ password })}
                        onToggleVisibility={() => this.setState({ passwordHidden: !this.state.passwordHidden })}
                    />

                    {
                        this.state.newUser &&
                        <AuthInput icon={this.state.confirmPasswordHidden ? 'eye' : 'eye-slash'} placeholder="Repetir senha..." keyboardType='numeric'
                            value={this.state.confirmPassword} secureTextEntry={this.state.confirmPasswordHidden}
                            onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
                            onToggleVisibility={() => this.setState({ confirmPasswordHidden: !this.state.confirmPasswordHidden })}
                        />
                    }
                    {
                        !this.state.newUser &&
                        <TouchableOpacity style={styles.forgetPassword} onPress={this.forgotPassword}>
                            <Text style={styles.forgetPasswordText}>Esqueci minha senha.</Text>
                        </TouchableOpacity>
                    }
                    <Button style={styles.button} color="#4682B4" onPress={this.signinOrSignup}>{this.state.newUser ? 'Cadastrar' : 'Entrar'}</Button>
                </View>
                <TouchableOpacity style={styles.registerButton} onPress={this.cleanInputs}>
                    <Text style={styles.textButton}>{this.state.newUser ? 'Já possui conta?' : 'Ainda não possui conta?'}</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

export default Login

