import React, {Component} from 'react'
import {View, ScrollView, Text, TouchableOpacity, Image} from 'react-native'
import styles from './styles'

import Icon from 'react-native-vector-icons/Feather'


export default class ProfileScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.myNameContainer}>
                    <View style={styles.containerImgName}>
                        <Image style={styles.logoImg} source={require('./../../assets/imgs/Logo.png')}/>
                        <View style={styles.containerName}>
                            <Text style={styles.txtH1}>Lucas martins de jesus</Text>
                            <Text>Rolim de Moura</Text>
                        </View>
                    </View>
                    
                    <View style={styles.mmyContactContainer}> 
                        <View style={styles.contactBox}>
                            <Icon name="phone" size={15} color='black' style={{marginRight: 15}}/>
                            <Text style={{fontSize: 15}}>984635625</Text>
                        </View>
                        <View style={styles.contactBox}>
                            <Icon name="mail" size={15} color='black' style={{marginRight: 15}}/>
                            <Text style={{fontSize: 15, width: '89%'}}>lucas.martins.jss@gmail.com</Text>
                        </View>
                    
                    </View>
                </View>
                <View style={styles.containerAlert}>
                    <Text style={styles.txtAlert}>
                        Complete seu cadastro para fazer uma adoção
                    </Text>
                    <TouchableOpacity style={styles.btCompleteRegister} onPress={() => this.props.navigation.navigate('CompleteProfile')}>
                        <Icon name="chevron-right" size={35} color='black'  />
                    </TouchableOpacity>
                
                </View>

                <View style={styles.otherInfoContainer}>
                    <View style={styles.boxOtherInfos}>
                        <Icon name="user" size={18} color='black'  style={{marginRight: 15}}/>
                        <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '85%'}}>
                            <Text style={{fontSize: 15}}>9481841-11</Text>
                            <Text style={{fontSize: 15, fontWeight: 'bold'}}>RG</Text>
                        </View>
                       
                    </View>
                    <View style={styles.boxOtherInfos}>
                        <Icon name="user" size={18} color='black'  style={{marginRight: 15}}/>
                        <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '85%'}}>
                            <Text style={{fontSize: 15}}>4002-8922</Text>
                            <Text style={{fontSize: 15, fontWeight: 'bold'}}>Telefone</Text>
                        </View> 
                    </View>
                    <View style={styles.boxOtherInfosAndress}>
                        <Text style={{fontSize: 17, fontWeight: 'bold', marginTop: 10}}>Endereço</Text>
                        <View style={styles.containerAndress}>
                            <Icon name="user" size={18} color='black'  style={{marginRight: 15}}/>
                            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '85%'}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize: 15, marginRight: 10}}>Avenida Geraldo Dias Fiusa</Text>
                                    <Text style={{fontSize: 15}}>5710</Text>
                                </View>
                               
                                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Rua</Text>
                            </View> 
                        </View> 
                        <View style={styles.containerAndress}>
                            <Icon name="user" size={18} color='black'  style={{marginRight: 15}}/>
                            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '85%'}}>
                                <Text style={{fontSize: 15}}>Cidade Alta</Text>
                                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Bairro</Text>
                            </View> 
                        </View> 
                        <View style={styles.containerAndress}>
                            <Icon name="user" size={18} color='black'  style={{marginRight: 15}}/>
                            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '85%'}}>
                                <Text style={{fontSize: 15}}>Rolim de Moura</Text>
                                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Cidade</Text>
                            </View> 
                        </View> 
                        <View style={styles.containerAndress}>
                            <Icon name="user" size={18} color='black'  style={{marginRight: 15}}/>
                            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '85%'}}>
                                <Text style={{fontSize: 15}}>Rondoônia</Text>
                                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Estado</Text>
                            </View> 
                        </View> 
                       
                       
                    </View>
                    <View style={styles.containerButtonsProfile}>
                        <TouchableOpacity style={styles.btnEditProfile} onPress={() => this.props.navigation.navigate('EditProfile')}>
                            <Icon name="edit-3" size={20} color='black'  style={{marginRight: 15}} />
                            <Text>Editar Perfil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnEditProfile} onPress={() => this.props.navigation.navigate('ChangePassword')}>
                            <Icon name="settings" size={20} color='black'  style={{marginRight: 15}}/>
                            <Text>Alterar senha</Text>
                        </TouchableOpacity>
                    </View>
                </View>
               
                
            </View>
        )
    }
}