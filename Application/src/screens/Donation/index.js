import React, { Component } from 'react'
import { Text, View, TextInput, Image, ScrollView, TouchableOpacity, Alert } from 'react-native'
import axios from 'axios'
import Icon from 'react-native-vector-icons/FontAwesome5'

import styles from './styles.js'

import {baseApiUrl} from './../../common/baseApiUrl.js'

const initialState = {
    donation: {
        description: ''
    }
}

class Donation extends Component {

    state = { ...initialState }

    requestCollect = async () => {

        await axios.post(`${baseApiUrl}/donation`, this.state.donation) // TODO Erro de duas respostas no mesmo fluxo /API
            .then(_ => Alert.alert('Eba!', 'Solicitação realizada com sucesso!'))
            .catch(err => Alert.alert('Ops', 'Ocorreu um erro ao solicitar coleta!'))
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView indicatorStyle={false} style={styles.scrollContainer}>
                    <View style={styles.imgContainer}>
                        <Image source={require('../../assets/imgs/donation.png')} style={styles.imgDonation} />
                    </View>
                    <Text style={styles.title}>Doações em dinheiro</Text>
                    <View style={styles.bankInfoContainer}>
                        <View style={styles.iconContainer}>
                            <Icon name="money-check-alt" size={30} color='dimgray' style={{ marginRight: 15 }} />
                        </View>
                        <View style={styles.infoGroup}>
                            <Text style={{ fontSize: 16, color: '#64718C', fontWeight: 'bold' }}>Banco do Brasil</Text>
                            <Text style={{ fontSize: 15, color: 'dimgray' }}>Agência 2173-3 Conta 23.808-2</Text>
                        </View>
                    </View>
                    <View style={styles.bankInfoContainer}>
                        <View style={styles.iconContainer}>
                            <Icon name="amazon-pay" size={30} color='dimgray' style={{ marginRight: 15 }} />
                        </View>
                        <View style={styles.infoGroup}>
                            <Text style={{ fontSize: 16, color: '#64718C', fontWeight: 'bold' }}>PIX</Text>
                            <Text style={{ fontSize: 15, color: 'dimgray' }}>884184112-14</Text>
                        </View>
                    </View>

                    <View style={styles.formRequest}>
                        <Text style={styles.title}>Precisa-se também de panos velhos, ração e remédios.</Text>
                        <TextInput
                            style={styles.requestInput}
                            placeholder="Item para doação"
                            value={this.state.donation.description}
                            onChangeText={(description) => this.setState({ donation: { description } })}
                        />
                        <TouchableOpacity style={styles.requestButton} onPress={this.requestCollect}>
                            <Text style={{ fontWeight: 'bold', color: '#fff' }}>Solicitar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Donation