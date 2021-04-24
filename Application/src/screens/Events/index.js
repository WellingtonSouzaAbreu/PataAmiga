import React, {Component}from 'react'
import { Text, View, StyleSheet, Image, ScrollView} from 'react-native'
import { Input, Button } from 'galio-framework';
import Icon from 'react-native-vector-icons/Feather'
import CardEvent from './../../components/EventCard'

import styles from './styles.js'

export default class EventScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.headerElement}>
                    <Image style={styles.eventImageBanner} source={require('./../../assets/imgs/events2.png')}/>
                    <Text style={styles.title}>Confira aqui nossos proximos eventos</Text> 
                </View>
                <View style={styles.containerScroll}>
                    <ScrollView>
                        <View style={styles.cardContainer}>
                            <Image style={styles.imgEvent} source={require('./../../assets/imgs/img2.jpg')}/>
                            <View style={styles.eventDescription}>
                                <Text style={styles.title}>Feira de Adoção</Text>
                                <View style={styles.infoLocationDate}>
                                    <View style={styles.groupInfo}>
                                        <View style={styles.info1}>
                                            <Icon name="calendar" size={14} color='black' style={{marginRight: 5}}/>
                                            <Text style={{marginRight:3}}>Data:</Text>
                                            <Text>21/05/2021</Text>
                                        </View>
                                        <View style={styles.info1}>
                                            <Icon name="clock" size={14} color='black' style={{marginRight: 5}}/>
                                            <Text style={{marginRight:3}}>Hora:</Text>
                                            <Text>14:30</Text>
                                        </View>
                                    </View>

                                    <View style={styles.groupInfo}>
                                        <Icon name="map" size={14} color='black' style={{marginRight: 5}}/>
                                        <Text style={{marginRight:3}}>Av T N° 5710 Cidade Alta - Rolim de Moura </Text>
                                    </View>                                 
                                </View>
                            </View>
                        </View>

                        <View style={styles.cardContainer}>
                            <Image style={styles.imgEvent} source={require('./../../assets/imgs/img2.jpg')}/>
                            <View style={styles.eventDescription}>
                                <Text style={styles.title}>Feira de Adoção</Text>
                                <View style={styles.infoLocationDate}>
                                    <View style={styles.groupInfo}>
                                        <View style={styles.info1}>
                                            <Icon name="calendar" size={14} color='black' style={{marginRight: 5}}/>
                                            <Text style={{marginRight:3}}>Data:</Text>
                                            <Text>21/05/2021</Text>
                                        </View>
                                        <View style={styles.info1}>
                                            <Icon name="clock" size={14} color='black' style={{marginRight: 5}}/>
                                            <Text style={{marginRight:3}}>Hora:</Text>
                                            <Text>14:30</Text>
                                        </View>
                                    </View>

                                    <View style={styles.groupInfo}>
                                        <Icon name="map" size={14} color='black' style={{marginRight: 5}}/>
                                        <Text style={{marginRight:3}}>Av T N° 5710 Cidade Alta - Rolim de Moura </Text>
                                    </View>                                 
                                </View>
                            </View>
                        </View>   
                                         
                        <View style={styles.cardContainer}>
                            <Image style={styles.imgEvent} source={require('./../../assets/imgs/img2.jpg')}/>
                            <View style={styles.eventDescription}>
                                <Text style={styles.title}>Feira de Adoção</Text>
                                <View style={styles.infoLocationDate}>
                                    <View style={styles.groupInfo}>
                                        <View style={styles.info1}>
                                            <Icon name="calendar" size={14} color='black' style={{marginRight: 5}}/>
                                            <Text style={{marginRight:3}}>Data:</Text>
                                            <Text>21/05/2021</Text>
                                        </View>
                                        <View style={styles.info1}>
                                            <Icon name="clock" size={14} color='black' style={{marginRight: 5}}/>
                                            <Text style={{marginRight:3}}>Hora:</Text>
                                            <Text>14:30</Text>
                                        </View>
                                    </View>

                                    <View style={styles.groupInfo}>
                                        <Icon name="map" size={14} color='black' style={{marginRight: 5}}/>
                                        <Text style={{marginRight:3}}>Av T N° 5710 Cidade Alta - Rolim de Moura </Text>
                                    </View>                                 
                                </View>
                            </View>
                        </View>                   
                        
                    </ScrollView>
                </View>
                
                 
            
            </View>
        )
    }
}