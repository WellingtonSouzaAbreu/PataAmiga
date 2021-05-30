import React, { Component } from 'react'
import { Text, Modal, View, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import styles from './styles.js'

import { formatDate, formatHour } from './../../common/commonFunctions.js'
import EventDetails from '../EventDetails'

const initialState = {
    modalVisible: false
}

export default class EventCard extends Component {
    state = { ...initialState }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible })
    }

    render() {
        const { modalVisible } = this.state

        console.log(this.props)
        
        return (
            <View style={styles.container}>
                <Modal
                    animationType='slide'
                    visible={modalVisible}
                    style={styles.modalContainer}
                    onRequestClose={() => {
                        this.setModalVisible(!modalVisible);
                    }}
                >
                    <EventDetails {...this.props} />

                </Modal>

                <Image style={styles.eventImage} source={require('./../../assets/imgs/img2.jpg')} />
                <TouchableOpacity style={styles.scroll}onPress={() => this.setModalVisible(true)} >
                    <View style={styles.eventInfo}>
                        <Text style={styles.title}>{this.props.title}</Text>
                            <View style={styles.infoRow}>
                                <View style={styles.infoItem}>
                                    <Icon name="calendar" size={15} color='gray' style={styles.iconStyle} />
                                    <Text style={styles.infoValue}>{formatDate(this.props.dateTime)}</Text>
                                </View>
                                <View style={styles.infoItem}>
                                    <Icon name="clock" size={15} color='gray' style={styles.iconStyle} />
                                    <Text style={styles.infoValue}>{formatHour(this.props.dateTime)}</Text>
                                </View>
                            </View>
                            <View style={styles.infoRow}>
                                <View style={styles.infoItem}>
                                    <Icon name="map" size={15} color='gray' style={styles.iconStyle} />
                                    <Text style={styles.infoValue}>{`${this.props.city} - ${this.props.district}`}</Text>
                                </View>
                            </View>
                            <View style={styles.infoRow}>
                                <View style={styles.infoItem}>
                                    <Icon name="map" size={15} color='gray' style={styles.iconStyle} />
                                    <Text style={styles.infoValue}>{`${this.props.address}`}</Text>
                                </View>
                            </View>
                    </View>
                </TouchableOpacity>

                {/* 
            
                <Image style={styles.imgEvent} source={require('./../../assets/imgs/img2.jpg')}    />
                    <TouchableOpacity style={styles.eventDescription} onPress={() => this.setModalVisible(true)} >
                        <Text style={styles.titleCard}>Feira de Adoção</Text>
                            <View style={styles.infoLocationDate}>
                                <View style={styles.groupInfo}>
                                    <View style={styles.info1}>
                                        <Icon name="calendar" size={14} color='#64718C' style={{marginRight: 5}}/>
                                        <Text style={styles.subTitleCard}>Data:</Text>
                                        <Text style={styles.subTitleCard}>21/05/2021</Text>
                                    </View>
                                    <View style={styles.info1}>
                                        <Icon name="clock" size={14} color='#64718C' style={{marginRight: 5}}/>
                                        <Text style={styles.subTitleCard}>Hora:</Text>
                                        <Text style={styles.subTitleCard}>14:30</Text>
                                    </View>
                                </View>
                            <View style={styles.groupInfo}>
                                <Icon name="map" size={14} color='#64718C' style={{marginRight: 5}}/>
                                <Text style={{marginRight:3, color: 'dimgray'}}>Av T N° 5710 Cidade Alta - Rolim de Moura </Text>
                            </View>                                 
                        </View>
                        
                    </TouchableOpacity>
             </View> */}
            </View>
        )
    }
}