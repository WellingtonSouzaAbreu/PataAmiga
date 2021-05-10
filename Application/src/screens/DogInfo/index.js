import React, { Component } from 'react'
import { Text, View, Image, Alert } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather'
import { Button } from 'galio-framework';
import axios from 'axios'

import styles from './styles'
import { baseApiUrl } from '../../common/baseApiUrl';

const initialState = {
    animal: {
        imagesURL: [
            { imageURL: 'cao1.jpeg' }
        ]
    },
    renderImage: false
}

export default class DogInfo extends Component {

    state = { ...initialState }

    componentDidMount = async () => {
        let idAnimal = this.props.navigation.state.params.id
        await axios.get(`${baseApiUrl}/animal/${idAnimal}`)
            .then(res => {
                this.setState({ animal: res.data, renderImage: true })
            })
            .catch(err => Alert.alert('Erro', err))
    }



    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.boxImage}>
                        {this.state.renderImage &&
                            <Image style={styles.dogImage} source={{ uri: `${baseApiUrl}/animal-pictures/${this.state.animal.imagesURL[0].imageURL}` }} />
                        }

                    </View>
                    <View style={styles.boxInfoBasic}>
                        <View style={styles.itemInfo}>
                            <Icon name="anchor" size={25} color='lightblue' style={{ marginVertical: 2 }} />
                            <Text style={{ fontSize: 17, color: 'gray' }}>Raça</Text>
                            <Text style={{ color: 'gray' }}>{this.state.animal.breed}</Text>
                        </View>
                        <View style={styles.itemInfo}>
                            <Icon name="anchor" size={25} color='lightblue' style={{ marginVertical: 2 }} />
                            <Text style={{ fontSize: 17, color: 'gray' }}>Idade</Text>
                            <Text style={{ color: 'gray' }}>{this.state.animal.aproximateAge}</Text>
                        </View>
                        <View style={styles.itemInfo}>
                            <Icon name="anchor" size={25} color='lightblue' style={{ marginVertical: 2 }} />
                            <Text style={{ fontSize: 17, color: 'gray' }}>Sexo</Text>
                            <Text style={{ color: 'gray' }}>{this.state.animal.sex == 'F' ? 'Fêmea' : 'Macho'}</Text>
                        </View>
                    </View>
                    <View style={styles.boxInfoDetailed}>
                        <Text style={{ fontSize: 17, color: 'gray', marginBottom: 10 }}>Informações Adicionais</Text>
                        <Text style={styles.txtDetail}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </Text>
                    </View>
                    <View style={styles.boxExtraDetail}>
                        <Text style={{ fontSize: 17, color: 'gray' }}>Cuidados especiais: </Text>
                        <Text style={{ color: 'gray' }}>Exercicios regulares</Text>
                    </View>

                    <Button style={styles.buttons} color="#4682B4" onPress={() => this.props.navigation.navigate('RequestAdoption')}>MANIFESTAR INTERESSE</Button>
                    <Button style={styles.buttons} color="#6495ED">COMPARTILHAR</Button>

                </View>
            </ScrollView>
        )

    }
}
