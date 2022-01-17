import axios from 'axios'
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native'

import styles from './styles'

import { showAlert } from './../../../common/commonFunctions.js'
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
    district: null
}

export default class EditProfile extends Component {

    state = { ...initialState }

    componentDidMount = () => {
        this.loadUserDataFromNavigation()
    }

    loadUserDataFromNavigation = () => {
        this.setState({ ...this.props.navigation.state.params })
    }

    applyMaskToCellNumber = (text) => {
        let formatedText = text
        const textLength = text.length
        const writing = this.state.cellNumber.length < text.length

        console.log(textLength)
        if (writing) {
            switch (textLength) {
                case 1:
                    formatedText = `+55 (69) 9${text}`
                    break
                case 15:
                    formatedText = `${text.substring(0, text.length - 1)}-${text.substring(text.length - 1, text.length)}`
                    break
            }
        } else {
            if (textLength == 9) formatedText = `+55 (69) 9`
            if (textLength == 16) formatedText = text.substring(0, text.length - 1)
        }

        this.setState({ cellNumber: formatedText })
    }

    updateProfile = async () => {
        await axios.put(`${baseApiUrl}/user/${this.state.id}`, { user: { ...this.state } })
            .then(res => showAlert('Pronto!', 'Seu perfil foi atualizado com sucesso!', [{ text: "OK", onPress: () => this.props.navigation.goBack() }]))
            .catch(err => {
                console.log(err)
                showAlert('Ops!', err.response ? err.response.data : 'Algo deu errado ao atualizar o seu perfil. Tente mais tarde.')
            })
    }

    render() {
        return (
            <View style={{backgroundColor: 'white', flex: 1}}>
                <ScrollView style={styles.container}>
                    <View style={styles.formCompleteProfile}>
                        <TextInput style={styles.longInput} placeholder="Nome"
                            value={this.state.name}
                            onChangeText={(name) => this.setState({ name })}
                        />
                        <TextInput style={styles.longInput} placeholder="Email"
                            value={this.state.email}
                            onChangeText={(email) => this.setState({ email })}
                        />
                        <TextInput style={styles.longInput} placeholder="Rua"
                            value={this.state.address}
                            onChangeText={(address) => this.setState({ address })}
                        />
                        <TextInput style={styles.longInput} placeholder="Telefone" keyboardType={'number-pad'}
                            value={this.state.phone}
                            onChangeText={(phone) => this.setState({ phone })}
                        />
                        <TextInput style={styles.longInput} placeholder="Celular" keyboardType={'number-pad'}
                            value={this.state.cellNumber}
                            onChangeText={this.applyMaskToCellNumber}
                        />
                        <View style={styles.containerShortInput}>
                            <TextInput style={styles.shortInput} placeholder="Número" keyboardType={'number-pad'}
                                value={this.state.houseNumber}
                                onChangeText={(houseNumber) => this.setState({ houseNumber })}
                            />
                            <TextInput style={styles.shortInput} placeholder="Bairro"
                                value={this.state.district}
                                onChangeText={(district) => this.setState({ district })}
                            />
                        </View>
                        <TextInput style={styles.longInput} placeholder="Cidade "
                            value={this.state.city}
                            onChangeText={(city) => this.setState({ city })}
                        />
                    </View>
                </ScrollView>
                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.saveButton} onPress={this.updateProfile}>
                        <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 15 }}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}