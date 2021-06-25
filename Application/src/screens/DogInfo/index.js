import React, { Component } from 'react'
import { Text, View, Image, Alert } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Button } from 'galio-framework';
import axios from 'axios'

import styles from './styles'
import { baseApiUrl } from '../../common/baseApiUrl';
import Slider from './../../components/Slider'

const initialState = {
    animal:{}
}

export default class DogInfo extends Component {

    state = { ...initialState }

    componentDidMount = async () => {
        let idAnimal = this.props.navigation.state.params.id
        await axios.get(`${baseApiUrl}/animal/${idAnimal}`)
            .then(res => {
                console.log(res.data)
                this.setState({ animal: res.data, renderImage: true })
            })
            .catch(err => Alert.alert('Erro', err))
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: '#fff'}} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        {this.state.renderImage &&
                            // <Image style={styles.dogImage} source={{ uri: `${baseApiUrl}/animal-pictures/${this.state.animal.imagesURL[0] && this.state.animal.imagesURL[0].imageURL}` }} />
                            <Slider {...this.state.animal.imagesURL} imageSource='animal'/>
                        }
                    </View>
                    <View style={styles.basicInfosContainer}>
                        <View style={styles.headerInfos}>
                            <View style={styles.headerInfo}>
                                <Icon name="dog" size={17} color='gray' style={styles.iconStyle} />
                                <Text style={styles.infoValue}>{this.state.animal.name}</Text>
                            </View>
                            <View style={styles.headerInfo}>
                                <Icon name="paw" size={17} color='gray' style={styles.iconStyle} />
                                <Text style={styles.infoValue}>{this.state.animal.breed}</Text>
                            </View>
                        </View>
                        <View style={styles.infoCardsContainer}>
                            <View style={styles.InfoGroup}>
                                <View style={styles.cardInfo}>
                                    <Text style={styles.infoLabel}>Castrado</Text>
                                    {this.state.animal.castrated
                                        ? <Icon name="check" size={17} color='#64718C' style={styles.iconStyle} />
                                        : <Icon name="times" size={17} color='#64718C' style={styles.iconStyle} />
                                    }
                                </View>
                                <View style={styles.cardInfo}>
                                    <Text style={styles.infoLabel}>Vacinado</Text>
                                    <Icon name="check" size={17} color='#64718C' style={styles.iconStyle} />
                                </View>
                                <View style={styles.cardInfo}>
                                    <Text style={styles.infoLabel}>Sexo</Text>
                                    {this.state.animal.sex == 'F'
                                        ? <Icon name="venus" size={17} color='#64718C' style={styles.iconStyle} />
                                        : <Icon name="mars" size={17} color='#64718C' style={styles.iconStyle} />
                                    }
                                </View>
                            </View>
                        </View>

                        <View style={styles.otherInfosContainer}>
                            <View style={styles.infoArea}>
                                <View style={styles.otherInfoGroup}>
                                    <Icon name="paw" size={17} color='gray' style={styles.iconStyle} />
                                    <Text style={styles.infoLabel}>Especie: </Text>
                                    <Text style={styles.infoValue}>{this.state.animal.specie}</Text>
                                </View>
                                <View style={styles.otherInfoGroup}>
                                    <Icon name="palette" size={17} color='gray' style={styles.iconStyle} />
                                    <Text style={styles.infoLabel}>Cor: </Text>
                                    <Text style={styles.infoValue}>{this.state.animal.color}</Text>
                                </View>
                                <View style={styles.otherInfoGroup}>
                                    <Icon name="clock" size={17} color='gray' style={styles.iconStyle} />
                                    <Text style={styles.infoLabel}>Idade: </Text>
                                    <Text style={styles.infoValue}>{this.state.animal.aproximateAge}</Text>
                                </View>
                            </View>
                            <View style={styles.shareArea}>
                                <TouchableOpacity style={styles.shareButton}>
                                    <Icon name="share-alt" size={20} color='#64718C' style={styles.iconStyle} />
                                </TouchableOpacity>
                            </View>
                        </View>
                       
                        
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionLabel}>Informações adicionais</Text>
                        <Text style={styles.descriptionValue}>
                            {this.state.animal.othersCharacteristics}
                        </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonExpressInterest} onPress={() => this.props.navigation.navigate('RequestAdoption', {animalId: this.state.animal.id})}>
                            <Text style={styles.buttonLabel}>Manifestar interesse</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )

    }
}
