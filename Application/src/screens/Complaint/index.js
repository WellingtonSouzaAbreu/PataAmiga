import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {  RadioButton } from 'react-native-paper';

import styles from './styles.js'

const initialState = {
    description: '',
    address: '',
    complaintType: '',
    city: '',
    district: ''
}

export default class Report extends Component {

    state = {...initialState}

    requestReport = () => {
        console.log(this.state)
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollReport}>
                    <View style={styles.boxElement}>
                    </View>
                    <View style={styles.boxFormReport}>
                        <Text style={{ fontSize: 20, color: '#64718C', margin: 5, fontWeight: 'bold' }}>Fazer uma denuncia</Text>
                        <View style={styles.containerRadioSelect}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#64718c' }}>Tipo da denúncia</Text>
                            <View style={styles.radioComponent}>
                                <View style={styles.radioContainer}>
                                    <RadioButton
                                        value='abandonment'
                                        color="#F28749"
                                        status={this.state.complaintType === 'abandonment' ? 'checked' : 'unchecked'}
                                        onPress={() => this.setState({complaintType: 'abandonment'})}
                                    />
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'dimgray' }}>Abandono</Text>
                                </View>
                                <View style={styles.radioContainer}>
                                    <RadioButton
                                        value="mistreatment"
                                        color="#F28749"
                                        status={this.state.complaintType === 'mistreatment' ? 'checked' : 'unchecked'}
                                        onPress={() => this.setState({complaintType: 'mistreatment'})}
                                    />
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'dimgray' }}>Maus tratos</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.inputForm}>
                        <TextInput
                            style={styles.smallInput}
                            value={this.state.city}
                            placeholder='Cidade'
                            onChangeText={(city) => this.setState({city})}
                        />
                        <TextInput
                            style={styles.smallInput}
                            value={this.state.district}
                            placeholder='Bairro onde aconteceu'
                            onChangeText={(district) => this.setState({district})}
                        />
                        <TextInput
                            style={styles.smallInput}
                            value={this.state.address}
                            placeholder='Endereço do ocorrido'
                            onChangeText={(address) => this.setState({address})}
                        />
                        <TextInput
                            style={styles.descriptionInput}
                            value={this.state.description}
                            placeholder='Forneça os detalhes do ocorrido'
                            onChangeText={(description) => this.setState({description})}
                            multiline={true}
                        />

                        <TouchableOpacity style={styles.reportButton} onPress={this.requestReport}>
                            <Text style={{ fontWeight: 'bold', color: '#fff' }}>Denunciar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>
        )

    }
}