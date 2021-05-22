import React, {Component} from 'react'
import {View, ScrollView, Text, TouchableOpacity, Image} from 'react-native'
import styles from './styles'

import Icon from 'react-native-vector-icons/FontAwesome5'


export default class ProfileScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.myNameContainer}>
                    <View style={styles.containerImgName}>
                        <Image style={styles.logoImg} source={require('./../../assets/imgs/Logo.png')}/>
                        <View style={styles.containerName}>
                            <Text style={styles.txtH1}>Lucas martins de jesus</Text>
                            <Text style={{color: 'dimgray'}}>Rolim de Moura</Text>
                        </View>
                    </View>
                    
                    <View style={styles.mmyContactContainer}> 
                        <View style={styles.contactBox}>
                            <Icon name="phone" size={15} color='dimgray' style={{marginRight: 15}}/>
                            <Text style={{fontSize: 15, color: '#64718C'}}>984635625</Text>
                        </View>
                        <View style={styles.contactBox}>
                            <Icon name="envelope" size={15} color='dimgray' style={{marginRight: 15}}/>
                            <Text style={{fontSize: 15, width: '89%', color: '#64718C'}}>lucas.martins.jss@gmail.com</Text>
                        </View>
                    
                    </View>
                </View>
                <View style={styles.containerAlert}>
                    <Text style={styles.txtAlert}>
                        Complete seu cadastro para fazer uma adoção
                    </Text>
                    <TouchableOpacity style={styles.btCompleteRegister} onPress={() => this.props.navigation.navigate('CompleteProfile')}>
                        <Icon name="arrow-right" size={30} color='#F27F3D'  />
                    </TouchableOpacity>
                
                </View>

                <View style={styles.otherInfoContainer}>
                    <View style={styles.boxOtherInfos}>
                        <Icon name="id-card" size={15} color='dimgray'  style={{marginRight: 15}}/>
                        <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '85%'}}>
                            <Text style={styles.txtInfo}>9481841-11</Text>
                            <Text style={styles.txtInfoNameIndicador}>RG</Text>
                        </View>
                       
                    </View>
                    <View style={styles.boxOtherInfos}>
                        <Icon name="phone" size={15} color='dimgray'  style={{marginRight: 15}}/>
                        <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '85%'}}>
                            <Text style={styles.txtInfo}>4002-8922</Text>
                            <Text style={styles.txtInfoNameIndicador}>Telefone</Text>
                        </View> 
                    </View>
                    <View style={styles.boxOtherInfosAndress}>
                        <Text style={{fontSize: 17, fontWeight: 'bold', marginTop: 10, color: '#64718C'}}>Endereço</Text>
                        <View style={styles.containerAndress}>
                            <Icon name="road" size={15} color='dimgray'  style={{marginRight: 15}}/>
                            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '85%'}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.txtInfo}>Avenida Geraldo Dias Fiusa</Text>
                                    <Text style={styles.txtInfo}>5710</Text>
                                </View>
                               
                                <Text style={styles.txtInfoNameIndicador}>Rua</Text>
                            </View> 
                        </View> 
                        <View style={styles.containerAndress}>
                            <Icon name="map-signs" size={15} color='dimgray'  style={{marginRight: 15}}/>
                            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '85%'}}>
                                <Text style={styles.txtInfo}>Cidade Alta</Text>
                                <Text style={styles.txtInfoNameIndicador}>Bairro</Text>
                            </View> 
                        </View> 
                        <View style={styles.containerAndress}>
                            <Icon name="building" size={15} color='dimgray'  style={{marginRight: 15}}/>
                            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '85%'}}>
                                <Text style={styles.txtInfo}>Rolim de Moura</Text>
                                <Text style={styles.txtInfoNameIndicador}>Cidade</Text>
                            </View> 
                        </View> 
                        <View style={styles.containerAndress}>
                            <Icon name="globe-americas" size={15} color='dimgray'  style={{marginRight: 15}}/>
                            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '85%'}}>
                                <Text style={styles.txtInfo}>Rondônia</Text>
                                <Text style={styles.txtInfoNameIndicador}>Estado</Text>
                            </View> 
                        </View> 
                       
                       
                    </View>
                    <View style={styles.containerButtonsProfile}>
                        <TouchableOpacity style={styles.btnEditProfile} onPress={() => this.props.navigation.navigate('EditProfile')}>
                            <Icon name="user-edit" size={20} color='dimgray'  style={{marginRight: 15}} />
                            <Text style={styles.txtBtn}>Editar Perfil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnEditProfile} onPress={() => this.props.navigation.navigate('ChangePassword')}>
                            <Icon name="key" size={20} color='dimgray'  style={{marginRight: 15}}/>
                            <Text style={styles.txtBtn}>Alterar senha</Text>
                        </TouchableOpacity>
                    </View>
                </View>
               
                
            </View>
        )
    }
}