import React, { Component, } from 'react'
import { View, Text, Modal, TouchableOpacity, Image } from 'react-native'
import styles from './styles'

import { baseApiUrl } from './../../common/baseApiUrl.js'
import { formatDate } from './../../common/commonFunctions.js'
import ModalContentHistory from '../ModalHistoryAnimal'

const initialState = {
    modalVisible: false
}

export default class CardAdopted extends Component {
    state = { ...initialState }

    showModal = () => {
        this.setState({ modalVisible: true });
    }

    closeModal = () => {
        console.log('Close modal')
        this.setState({ modalVisible: false });
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    visible={this.state.modalVisible}
                    style={styles.modalContainer}
                >
                    <ModalContentHistory {...this.props} onCloseModal={this.closeModal} />
                </Modal>

                <Image style={styles.adoptedImage} source={{ uri: `${baseApiUrl}/publication-pictures/${this.props.imagesURL[0].imageURL}` }} />
                <View style={styles.groupInfoAdopted}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.infoLabel}>Adotado: </Text>
                        <Text style={styles.infoLabel}>{formatDate(this.props.dateTime)}</Text>

                    </View>

                    <TouchableOpacity style={styles.historyButton} onPress={this.showModal} >
                        <Text style={styles.buttonLabel}>
                            História
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}