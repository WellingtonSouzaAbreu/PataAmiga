import React, {Component}from 'react'
import { Text,Modal, View, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import ModalContentEventDetail from './../ModalEventDetails'


import styles from './styles.js'



export default class CardEvent extends Component {
    state = {
        modalVisible: false
    }

    setModalVisible= (visible)  => {
        this.setState({ modalVisible: visible})
    }

    render(){
       const { modalVisible } = this.state
        return(
            <View style={styles.cardContainer}>
                <Modal
                    animationType= "slide"
                    visible= {modalVisible}
                    style={styles.modalContainer}
                    onRequestClose={() => {
                        this.setModalVisible(!modalVisible);
                    }}
                 >
                    <ModalContentEventDetail/>
                    
                </Modal>
               
                   
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
             </View>
        )
    }
}