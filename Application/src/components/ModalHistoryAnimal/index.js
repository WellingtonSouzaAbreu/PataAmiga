import React, {useState, } from 'react'
import { View, Modal, Text, TouchableOpacity,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from './styles'

import SliderImg from './Slider'
export default function ModalContentHistory() {
    return(
        <View style={styles.modalContent}>
            <View style={styles.HeaderModal}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name="dog" size={20} color='dimgray' style={{marginRight: 10}}/>
                    <Text style={styles.txtNameAnimal}>Bereenice</Text>
                </View>
                <TouchableOpacity style={{width: 25, height: '100%'}} >
                    <Icon name="times-circle" size={25} color='#F28749' style={{marginVertical: 2}}/>
                </TouchableOpacity>
                                    
            </View>
            <View style={styles.sliderContainer}>
                <SliderImg/>
                </View>
                    <ScrollView style={styles.rescueDetailsScroll}>
                        <View style={{flexDirection: 'row', width: '100%'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'dimgray', marginBottom: 5}}>Berenice</Text>
                        </View>
                        <View style={styles.BoxDetailsOfRescue}>
                           
                            <View style={{flexDirection: 'row', height: 30, alignItems: 'center'}}>
                                <Icon name="calendar-alt" size={18} color='dimgray' style={{marginRight: 5}}/>
                                <Text style={{fontSize: 15, fontWeight: 'bold', color: '#64718C'}}>Data do Resgate: </Text>
                                <Text style={{fontSize: 15, fontWeight: 'bold', color: '#64718C'}}> 25/01/2021</Text>
                            </View>
                            <View style={{flexDirection: 'row', height: 30, alignItems: 'center'}}>
                                <Icon name="first-aid" size={15} color='dimgray' style={{marginRight: 5}}/>
                                <Text style={{fontSize: 15, fontWeight: 'bold', color: '#64718C'}}>Motivo do resgate: </Text>
                                <Text style={{fontSize: 15, fontWeight: 'bold', color: '#64718C'}}>Abandono</Text>
                            </View>
                        </View>

                        <ScrollView style={styles.containerHistory}>
                            <Text style={{color: 'dimgray', fontSize: 20, fontWeight: 'bold', borderBottomColor: '#f2f2f2', borderBottomWidth: 1}}>História</Text>
                            <Text style={styles.txtHistory}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Text>

                        </ScrollView>

                    </ScrollView>
                </View>
            
       
    )
    
}