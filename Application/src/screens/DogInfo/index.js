import React, { Component } from 'react'
import { Text, View, Image, Alert } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Button } from 'galio-framework';
import axios from 'axios'

import styles from './styles'
import { baseApiUrl } from '../../common/baseApiUrl';


export default class DogInfo extends Component {


    render() {
        return (
            <ScrollView style={{backgroundColor: '#fff'}}>
                <View style={styles.container}>
                    <View style={styles.boxImage}>
                       
                    </View>
                    <View style={styles.boxBasicInfos}>
                        <View style={styles.nameOfAnimal}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icon name="dog" size={17} color='#64718C' style={{marginRight: 5}}/>
                                <Text style={{color: '#64718C', fontWeight: 'bold', fontSize: 17}}>Berenice</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icon name="paw" size={17} color='#64718C' style={{marginRight: 5}}/>
                                <Text style={{color: '#64718C', fontWeight: 'bold', fontSize: 17, }}>Pitbull</Text>
                            </View>
                            
                            
                            
                        </View>
                        <View style={styles.containerInfos}>
                            <View style={styles.InfoGroup}>
                                <View style={styles.info}>
                                    <Text style={{color: '#64718C', fontWeight: 'bold', fontSize: 17}}>Castrado</Text>
                                    <Icon name="check" size={17} color='gray' style={{marginRight: 5}}/>  
                                </View>
                                <View style={styles.info}>
                                    <Text style={{color: '#64718C', fontWeight: 'bold', fontSize: 17}}>Vacinado</Text>
                                    <Icon name="times" size={17} color='gray' style={{marginRight: 5}}/>  
                                </View>
                                <View style={styles.info}>
                                    <Text style={{color: '#64718C', fontWeight: 'bold', fontSize: 17}}>Sexo</Text>
                                    <Text style={{fontWeight: 'bold', color: 'gray' ,fontSize: 16 }}>F</Text>
                                </View>
                                
                            </View>
                        </View>

                        <View style={styles.boxOtherInfos}>
                            <View style={{height: 85, width:'75%', justifyContent: 'space-between', }}>
                                <View style={styles.otherInfoGroup}>
                                    <Icon name="paw" size={17} color='gray' style={{marginRight: 5}}/>
                                    <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 17}}>Especie: </Text> 
                                    <Text style={{color: '#64718C', fontWeight: 'bold', fontSize: 17}}>Cão</Text>   
                                </View>
                                <View style={styles.otherInfoGroup}>
                                    <Icon name="palette" size={17} color='gray' style={{marginRight: 5}}/>
                                    <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 17}}>Cor: </Text> 
                                    <Text style={{color: '#64718C', fontWeight: 'bold', fontSize: 17}}>Marrom</Text>   
                                </View>
                                <View style={styles.otherInfoGroup}>
                                    <Icon name="clock" size={17} color='gray' style={{marginRight: 5}}/>
                                    <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 17}}>Idade aproximada: </Text> 
                                    <Text style={{color: '#64718C', fontWeight: 'bold', fontSize: 17}}>15 Meses</Text>   
                                </View>
                            </View>
                            <View style={{height: 85,justifyContent: 'center', alignItems: 'center', width: '25%'}}>
                                <TouchableOpacity style={styles.btnShare}>
                                    <Text style={{ color:'#64718C', fontWeight: '600'}}>Compartilhar</Text>
                                    <Icon name="share-alt" size={20} color='#64718C' style={{marginRight: 5}}/>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                       
                        
                    </View>
                    <View style={styles.descriptionBox}>
                        <Text style={styles.txtTitle}>Informações adicionais</Text>
                        <Text style={styles.txtDescription}>
                            Berenice é uma Pitbull docil, que gosta de brincar e de receber atenção e carinho, 
                            Berenice é uma Pitbull docil, que gosta de brincar e de receber atenção e carinho
                            Berenice é uma Pitbull docil, que gosta de brincar e de receber atenção e carinho
                            Berenice é uma Pitbull docil, que gosta de brincar e de receber atenção e carinho
                        </Text>
                    </View>

                    <View style={styles.containerButtons}>
                        <TouchableOpacity style={styles.btnInteress} onPress={() => this.props.navigation.navigate('RequestAdoption')}>
                            <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 16}}>Manifestar interesse</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )

    }
}
