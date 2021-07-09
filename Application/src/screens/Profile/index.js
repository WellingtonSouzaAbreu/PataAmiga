import React, { Component } from 'react'
import { View, ScrollView, Text, TouchableOpacity, Image, Alert } from 'react-native'
import styles from './styles'

import Icon from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios'
import { baseApiUrl } from '../../common/baseApiUrl'

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

export default class Profile extends Component {

    state = { ...initialState }

    componentDidMount = () => {
        console.log('Fui montado') //TODO Não recarrega quando retorna da stack (https://pt.stackoverflow.com/questions/446419/atualizar-useeffect-da-p%C3%A1gina-navigation-goback)
        this.loadUserData()
    }

    loadUserData = async () => {
        axios.defaults.headers['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IldlbGxpbmd0b24gU291emEiLCJjZWxsTnVtYmVyIjoiOSA4NDQ2LTU5OTcifQ.xt5q1HUEsGtlR_1OafRUzObyAONOek_3WlAFwQKSrWE'

        await axios.get(`${baseApiUrl}/user/noUsed`)
            .then(res => this.setState({ ...res.data }))
            .catch(err => {
                console.log(err.response.data)
                Alert.alert('Ops!', 'Houve um erro ao obter seus dados.')
            })
    }

    renderProfileCompletarionAlert = () => {

        let validations = []

        validations.push(!!this.state.email)
        validations.push(!!this.state.houseNumber)
        validations.push(!!this.state.address)
        validations.push(!!this.state.city)
        validations.push(!!this.state.district)

        if (validations.reduce((total, current) => total && current)) return null

        return (
            <View style={styles.warningContainer}>
                <Text style={styles.warningText}>
                    Complete seu cadastro para fazer uma adoção
                </Text>
                <TouchableOpacity style={styles.buttonCompleteRegister} onPress={() => this.props.navigation.navigate('CompleteProfile', { ...this.state })}>
                    <Icon name="arrow-right" size={30} color='#F27F3D' />
                </TouchableOpacity>

            </View>
        )
    }

    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <View style={styles.imageAndNameContainer}>
                            <Image style={styles.logoImg} source={require('./../../assets/imgs/Logo.png')} />
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameLabel}>{this.state.name}</Text>
                                <Text style={{ color: 'dimgray' }}>{this.state.city}</Text>
                            </View>
                        </View>

                        <View style={styles.contactContainer}>
                            <View style={styles.contactArea}>
                                <Icon name="phone" size={15} color='dimgray' style={{ marginRight: 15 }} />
                                <Text style={styles.valueLabel}>{this.state.cellNumber}</Text>
                            </View>
                            <View style={styles.contactArea}>
                                <Icon name="envelope" size={15} color='dimgray' style={{ marginRight: 15 }} />
                                <Text style={styles.valueLabel}>{this.state.email || '---'}</Text>
                            </View>

                        </View>
                    </View>
                    {this.renderProfileCompletarionAlert()}

                    <View style={styles.personalInfoContainer}>

                        <View style={styles.infoArea}>
                            <Icon name="phone" size={15} color='dimgray' style={{ marginRight: 15 }} />
                            <View style={styles.infoAreaText}>
                                <Text style={styles.valueLabel}>{this.state.phone || '---'}</Text>
                                <Text style={styles.label}>Telefone</Text>
                            </View>
                        </View>
                        <View style={styles.addressInfos}>
                            <Text style={styles.addressTitle}>Endereço</Text>
                            <View style={styles.addressInfoRow}>
                                <Icon name="road" size={15} color='dimgray' style={{ marginRight: 15 }} />
                                <View style={styles.infoAreaText}>
                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                        <Text style={styles.valueLabel}>{this.state.address + ' - ' || '---'} {this.state.houseNumber} </Text>
                                    </ScrollView>
                                    <Text style={styles.label}>Rua</Text>
                                </View>
                            </View>
                            <View style={styles.addressInfoRow}>
                                <Icon name="map-signs" size={15} color='dimgray' style={{ marginRight: 15 }} />
                                <View style={styles.infoAreaText}>
                                    <Text style={styles.valueLabel}>{this.state.district || '---'}</Text>
                                    <Text style={styles.label}>Bairro</Text>
                                </View>
                            </View>
                            <View style={styles.addressInfoRow}>
                                <Icon name="building" size={15} color='dimgray' style={{ marginRight: 15 }} />
                                <View style={styles.infoAreaText}>
                                    <Text style={styles.valueLabel}>{this.state.city || '---'}</Text>
                                    <Text style={styles.label}>Cidade</Text>
                                </View>
                            </View>
                            <View style={styles.addressInfoRow}>
                                <Icon name="globe-americas" size={15} color='dimgray' style={{ marginRight: 15 }} />
                                <View style={styles.infoAreaText}>
                                    {/* // TODO Abarcar estados? (Lucas) */}
                                    <Text style={styles.valueLabel}>Rondônia</Text>
                                    <Text style={styles.label}>Estado</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.profileButtonsContainer}>
                            <TouchableOpacity style={styles.editProfileButton} onPress={() => this.props.navigation.navigate('EditProfile', { ...this.state })}>
                                <Icon name="user-edit" size={20} color='dimgray' style={{ marginRight: 15 }} />
                                <Text style={styles.labelButton}>Editar Perfil</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.editProfileButton} onPress={() => this.props.navigation.navigate('ChangePassword', {...this.state})}>
                                <Icon name="key" size={20} color='dimgray' style={{ marginRight: 15 }} />
                                <Text style={styles.labelButton}>Alterar senha</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </ScrollView>
        )
    }
}