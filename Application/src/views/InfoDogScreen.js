import React, {Component}from 'react'
import { Text, View, StyleSheet, Image} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { Input, Button  } from 'galio-framework';

export default class InfoDogScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                 <View style={styles.boxImage}>
                     <Image style={styles.DogImage} source={require('./../assets/images/cao2.png')}/>
                 </View>
                 <View style={styles.boxInfoBasic}>
                    <View style={styles.itemInfo}>
                        <Icon name="anchor" size={25} color='lightblue' style={{marginVertical: 2}}/>
                        <Text style={{fontSize: 17, color: 'gray'}}>Raça</Text>
                        <Text style={{color: 'gray'}}>Pastor Alemão</Text>
                    </View>
                    <View style={styles.itemInfo}>
                        <Icon name="anchor" size={25} color='lightblue' style={{marginVertical: 2}}/>
                        <Text style={{fontSize: 17, color: 'gray'}}>Idade</Text>
                        <Text style={{color: 'gray'}}>6 a 9 Meses</Text>
                    </View>
                    <View style={styles.itemInfo}>
                        <Icon name="anchor" size={25} color='lightblue' style={{marginVertical: 2}}/>
                        <Text style={{fontSize: 17, color: 'gray'}}>Sexo</Text>
                        <Text style={{color: 'gray'}}>Macho</Text>
                    </View>
                 </View>
                 <View style={styles.boxInfoDetailed}>
                     <Text style={{fontSize: 17, color: 'gray', marginBottom: 10}}>Informações Adicionais</Text>
                     <Text style={styles.txtDetail}>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </Text>
                 </View>
                 <View style={styles.boxExtraDetail}>
                     <Text style={{fontSize: 17, color: 'gray'}}>Cuidados especiais: </Text>
                     <Text style={{color: 'gray'}}>Exercicios regulares</Text>
                 </View>

                 <Button style={styles.buttons} color="#4682B4">MANIFESTAR INTERESSE</Button>
                 <Button style={styles.buttons} color="#6495ED">COMPARTILHAR</Button>
            </View>
        )
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    boxImage: {
        alignSelf: 'stretch',
        height: 250,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'gray'
    },

    DogImage: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        height: 250,
        resizeMode: 'stretch',

    },

    boxInfoBasic: {
        height: 110,
        alignSelf: 'stretch',
        flexDirection: 'row',
        margin: 5,
        borderRadius: 5,
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    itemInfo: {
        height: 100,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:2,
        borderBottomColor: 'lightblue',
        borderBottomWidth: 2
    },

    boxInfoDetailed: {
        alignSelf: 'stretch',
        margin: 5,
        height: 150,
        alignItems: 'center'
    },

    txtDetail: {
        alignSelf: 'stretch',
        margin: 1,
        color: 'dimgray',
        textAlign: 'center',
        fontSize: 15,
        maxHeight: 150,
        minHeight: 150,
        
    },

    boxExtraDetail: {
        alignSelf: 'stretch',
        height: 50,
        margin: 5,
        borderColor: 'lightblue',
        borderRightWidth: 2
    },

    buttons: {
        width: 250,
        height: 35
    }

})