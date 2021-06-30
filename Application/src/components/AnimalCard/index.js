import React from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Button } from 'galio-framework';

import styles from './styles.js'

import { baseApiUrl } from './../../common/baseApiUrl.js'

const AnimalCard = (props) => {

    const navigateToDogInfo = () => {
        props.onNavigateToDogInfo(props.id)
    }

    const selectAdoption = () => {
        console.log(props.id)
        props.onSelectAdoption(props.id)
    }

    return (
        <View style={[styles.dogCard, props.selectButton && { height: 120 }]}>
            <View style={styles.dogInfo}>
                <View style={styles.imageContainer}>
                    <Image style={styles.dogImage} source={{ uri: `${baseApiUrl}/animal-pictures/${props.imageURL}` }} />
                </View>
                <View style={styles.infoDogContainer}>
                    <View style={styles.previewInfos}>
                        <View style={styles.groupInfoIcon}>
                            <Icon name="paw" size={20} color='#979DA6' style={{ marginRight: 5 }} />
                            <Text style={styles.txtPreviewInfo}>{props.breed}</Text>
                        </View>
                        <View style={styles.groupInfoIcon}>
                            <Icon name="dog" size={20} color='#979DA6' style={{ marginRight: 5 }} />
                            <Text style={styles.txtPreviewInfo}>{props.aproximateAge}</Text>
                        </View>
                        <View style={styles.groupInfoIcon}>
                            <Icon name="venus-mars" size={20} color='#979DA6' style={{ marginRight: 5 }} />
                            <Text style={styles.txtPreviewInfo}>{props.sex == 'F' ? 'Fêmea' : 'Macho'}</Text>
                        </View>
                    </View>

                    {
                        !props.selectButton
                            ?
                            <TouchableOpacity style={styles.buttonDetail} onPress={navigateToDogInfo}>
                                <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                                    Detalhes
                                </Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={styles.buttonDetail} onPress={selectAdoption}>
                                <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                                    Selecionar
                                </Text>
                            </TouchableOpacity>
                    }
                </View>
            </View>
        </View>
    )
}

export default AnimalCard