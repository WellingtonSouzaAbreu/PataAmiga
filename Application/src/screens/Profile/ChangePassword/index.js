import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView, TextInput, Alert, Button } from 'react-native'
import axios from 'axios'

import styles from './styles'

import { baseApiUrl } from '../../../common/baseApiUrl'

const initialState = {
    id: null,
    city: null,
    address: null,
    houseNumber: null,
    email: null,
    phone: null,
    cellNumber: null,
    name: null,
    district: null,

    oldEmail: null,
    password: null,
    confirmPassword: null,
}

export default class ChangePassword extends Component {

    state = { ...initialState }

    componentDidMount = () => {
        this.loadUserDataFromNavigation()
    }

    loadUserDataFromNavigation = () => {
        this.setState({ ...this.props.navigation.state.params, oldEmail: this.props.navigation.state.params.email, email: null })
    }

    updateProfile = async () => {

        let changePassword = false

        if(this.state.password != null || this.state.confirmPassword != null) {
            changePassword = true
        }

        if(this.state.oldEmail == this.state.email){
            Alert.alert('Ops!', 'O email que você está tentando alterar é igual ao antigo. Tente outro email.')
            return
        }

        if(changePassword && this.state.password != this.state.confirmPassword){
            Alert.alert('Ops!', 'As senhas devem ser iguais')
            return
        }

        const user = { ...this.state }
        delete user.oldEmail

        if(!changePassword){
            delete user.password
        }

        console.log(this.state.confirmPassword)
        

        await axios.put(`${baseApiUrl}/user/${this.state.id}`, { user })
            .then(res => Alert.alert('Oba!', 'Seu perfil foi atualizado com sucesso', [{ text: "OK", onPress: () => this.props.navigation.goBack() }]))
            .catch(err => {
                console.log(err)
                Alert.alert('Ops!', 'Algo deu errado ao atualizar o seu perfil.')
            })
    }

    render() {
        return (
            <ScrollView style={styles.container}>

                <View style={styles.formChangeMailPassword}>
                    <View style={styles.formCard}>
                        <Text style={styles.cardTitle}>Alterar Email</Text>
                        <View style={styles.containerInputs}>
                            <TextInput style={styles.inputChange} placeholder="Email atual" editable={false}
                                value={this.state.oldEmail} />
                            <TextInput style={styles.inputChange} placeholder="Novo email"
                                value={this.state.email} onChangeText={(email) => this.setState({ email })} />
                            <TouchableOpacity style={styles.saveButton} onPress={this.updateProfile}>
                                <Text style={styles.buttonText}>Alterar</Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                    <View style={styles.formCard}>
                        <Text style={styles.cardTitle}>Alterar Senha</Text>
                        <View style={styles.containerInputs}>
                            <TextInput style={styles.inputChange} placeholder="Nova senha" 
                                value={this.state.password} onChangeText={(password) => this.setState({password})}/>
                            <TextInput style={styles.inputChange} placeholder="Confirme a nova senha" 
                                value={this.state.confirmPassword} onChangeText={(confirmPassword) => this.setState({confirmPassword})}/>
                            <TouchableOpacity style={styles.saveButton} onPress={this.updateProfile}>
                                <Text style={styles.buttonText} >Alterar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>

        )
    }
}