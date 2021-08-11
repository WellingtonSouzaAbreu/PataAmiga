import axios from 'axios'
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native'
import { Button } from 'react-native-paper'
import { baseApiUrl } from '../../../common/baseApiUrl'
import styles from './styles'

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

    updateProfile = async () => {
        await axios.put(`${baseApiUrl}/user/${this.state.id}`, { user: { ...this.state } })
            .then(res => Alert.alert('Oba!', 'Seu perfil foi atualizado com sucesso', [{ text: "OK", onPress: () => this.props.navigation.goBack() }]))
            .catch(err => {
                console.log(err)
                Alert.alert('Ops!', 'Algo deu errado ao atualizar o seu perfil.', <Button />)
            })
    }

    render() {
        return (

            //<ScrollView>{/*  // TODO Ao colocar o Scroll, quebra o layout entre formCompleteProfile e saveButton */}
            <View style={styles.container}>
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
                        onChangeText={(cellNumber) => this.setState({ cellNumber })}
                    />
                    <View style={styles.containerShortInput}>
                        <TextInput style={styles.shortInput} placeholder="Número"  keyboardType={'number-pad'}
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
                <TouchableOpacity style={styles.saveButton} onPress={this.updateProfile}>
                    <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 15 }}>Salvar</Text>
                </TouchableOpacity>
            </View>
            //</ScrollView>


        )
    }
}