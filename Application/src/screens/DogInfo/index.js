import React, {Component}from 'react'
import { Text, View,  Image} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import {  Button  } from 'galio-framework';

import styles from './styles'

export default class DogInfo extends Component {
    render(){
        return(
            <View style={styles.container}>
                 <View style={styles.boxImage}>
                     {/* <Image style={styles.DogImage} source={require('./../../assets/imgs/cao2.png')}/> */}
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
                        <Text style={{color: 'gray'}}>6 a 90 Meses</Text>
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

                 <Button style={styles.buttons} color="#4682B4" onPress={() => this.props.navigation.navigate('RequestAdoption')}>MANIFESTAR INTERESSE</Button>
                 <Button style={styles.buttons} color="#6495ED">COMPARTILHAR</Button>
            </View>
        )
        
    }
}
