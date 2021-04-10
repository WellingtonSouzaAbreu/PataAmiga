import React, {Component}from 'react'
import { Text, View, StyleSheet, Image} from 'react-native'
import { Input, Button } from 'galio-framework';
import Icon from 'react-native-vector-icons/Feather'

export default class DonationScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.elementBox}>
                    <Image style={styles.donationImage} source={require('./../assets/images/donation.png')}/>
                    <Text style={{fontSize: 19, color: 'grey'}}>Ajude com uma doação</Text>
                </View>
                <View style={{height: 520, justifyContent: 'space-around'}}>
                    <View style={styles.boxInfoBancaria}>
                        <Text style={{fontSize: 18,color: 'gray',marginBottom: 5}}>Doações em Dinheiro</Text>
                        <Text style={{fontSize: 17,color: 'gray'}}>Banco do Brasil, agência 2173-3conta 23.808-2 </Text>
                        
                        <Text style={{fontSize: 20,color: 'gray', marginTop: 15}}>PIX</Text>
                        <Icon name="command" size={20} color='lightblue' style={{marginVertical: 2}}/>
                        <Text style={{fontSize: 17,color: 'gray'}}>8418918198411</Text>
                    </View>
                    <View style={styles.boxRequest}>
                        <Text style={{fontSize: 18, textAlign: 'center', marginBottom: 10, color: 'gray'}}>Precisa-se também de panos velhos,ração, e remédios </Text>
                        <Text style={{textAlign: 'right', fontSize: 15,}}>Item para doação</Text>
                        <Input placeholder=""  />
                        <Text style={{textAlign: 'right', fontSize: 15,}}>Contato</Text>
                        <Input placeholder=""  />
                        <Button color="#667eea" style={{width: 300}}>Solicitar Busca</Button>
                    </View>
                </View> 
               
            </View>
        )
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f2f2f2'
    },

    elementBox: {
        height: 220,
        alignSelf: 'stretch',
        backgroundColor: '#DCDCDC',
        justifyContent: 'center',
        alignItems: 'center',
    },

    donationImage: {
        width: 170,
        height: 170,
        resizeMode: 'contain'
    },

    boxInfoBancaria: {
        width: 370,
        height: 160,
        backgroundColor: '#ffffff',
        marginTop: 10,
        paddingVertical: 10,
        alignItems: 'center'
    },

    boxRequest: {
        width: 370,
        height: 300,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        paddingVertical: 15,
    },



})