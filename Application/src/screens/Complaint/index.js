import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, ScrollView, Linking } from 'react-native'
import { RadioButton } from 'react-native-paper';
import axios from 'axios'

import styles from './styles.js'

import { baseApiUrl } from '../../common/baseApiUrl.js'
import { showAlert } from '../../common/commonFunctions.js';

const initialState = {
    description: null,
    address: null,
    complaintType: null,
    city: null,
    district: null,
    locale: null
}

export default class Report extends Component {

    state = { ...initialState }

    requestReport = async () => {
        await axios.post(`${baseApiUrl}/complaint`, { complaint: this.state })
            .then(res => {
                showAlert('Pronto!', 'Denúncia realizada com sucesso!')
                this.setState({ ...initialState })
            })
            .catch(err => {
                console.log(err.response.data)
                showAlert('Ops!', err.response ? err.response.data : 'Ocorreu um erro ao realizar denúncia!')
            })
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.boxFormReport}>
                        <Text style={styles.title}>Fazer uma denuncia</Text>
                        <View style={styles.containerRadioSelect}>
                            <Text style={styles.complaintTypeLabel}>Motivo da denúncia</Text>
                            <View style={styles.radioComponent}>
                                <View style={styles.radioContainer}>
                                    <RadioButton
                                        value='Abandono'
                                        color="#F28749"
                                        status={this.state.complaintType === 'Abandono' ? 'checked' : 'unchecked'}
                                        onPress={() => this.setState({ complaintType: 'Abandono' })}
                                    />
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'dimgray' }}>Abandono</Text>
                                </View>
                                <View style={styles.radioContainer}>
                                    <RadioButton
                                        value="Maus tratos"
                                        color="#F28749"
                                        status={this.state.complaintType === 'Maus tratos' ? 'checked' : 'unchecked'}
                                        onPress={() => this.setState({ complaintType: 'Maus tratos' })}
                                    />
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'dimgray' }}>Maus tratos</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.inputForm}>
                        <View style={styles.inputArea}>
                            <TextInput
                                style={styles.smallInput}
                                value={this.state.city}
                                placeholder={'Cidade'}
                                onChangeText={(city) => this.setState({ city })}
                            />
                            <TextInput
                                style={styles.smallInput}
                                value={this.state.district}
                                placeholder={'Bairro onde aconteceu'}
                                onChangeText={(district) => this.setState({ district })}
                            />
                            <TextInput
                                style={styles.smallInput}
                                value={this.state.address}
                                placeholder={'Endereço do ocorrido'}
                                onChangeText={(address) => this.setState({ address })}
                            />
                            <TextInput
                                style={styles.smallInput}
                                value={this.state.locale}
                                placeholder={'Local'}
                                onChangeText={(locale) => this.setState({ locale })}
                            />
                            <TextInput
                                style={styles.descriptionInput}
                                value={this.state.description}
                                placeholder={'Forneça os detalhes do ocorrido'}
                                onChangeText={(description) => this.setState({ description })}
                                multiline={true}
                            />
                        </View>

                        <TouchableOpacity style={styles.reportButton} onPress={this.requestReport}>
                            <Text style={{ fontWeight: 'bold', color: '#fff' }}>Denunciar</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.legislationArea} onPress={() => Linking.openURL('http://www.planalto.gov.br/ccivil_03/leis/l9605.htm')}>
                        <Text style={styles.legislationText}>Deseja saber o que a lei diz sobre a proteção dos animais? Clique aqui.</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        )
    }
}