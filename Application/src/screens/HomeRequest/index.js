import  React, {Component} from "react";
import { View, Text, Image, TextInput } from "react-native";
import {  Button  } from 'galio-framework';
import Icon from 'react-native-vector-icons/Feather'

import styles from './styles'

export default class HomeRequestSreen extends Component {
  render(){
    return (
      <View style={styles.container}>
          <View style={styles.headerElement}>
                <Image style={styles.imgElement} source={require('./../../assets/imgs/homerequest.png')}/>
                <Text style={{fontWeight: 'bold', fontSize: 22}}>Onde ele vai morar?</Text>
          </View>
          <View style={styles.containerUpload}>

              <View style={styles.formUpload}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Enviar Descrição</Text>
                    <TextInput 
                        placeholder="Detalhes"
                        style={styles.input}
                        multiline
                        numberOfLines={4}
                    />

                 
                    <Button  icon="camera" iconFamily="feather" iconSize={25} color="warning" iconColor="#fff" style={styles.btSelectImage}>Escolher Imagem</Button>

                        
                    
                <Button color="info" style={styles.buttonUpload}>Enviar</Button>    
              </View>


          </View>
      </View>
    );
  }
  
}
