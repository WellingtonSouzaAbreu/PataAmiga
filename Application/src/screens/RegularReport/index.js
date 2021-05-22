import  React, {Component} from "react";
import { View, Text, Image, TextInput, TouchableOpacity} from "react-native";
import {  Button  } from 'galio-framework';
import Icon from 'react-native-vector-icons/FontAwesome5'

import styles from './styles'

export default class RegularReportScreen extends Component {
  render(){
    return (
      <View style={styles.container}>
          <View style={styles.headerElement}>
                <Image style={styles.imgElement} source={require('./../../assets/imgs/upload.png')}/>
                <Text style={{fontWeight: 'bold', fontSize: 22, color: '#64718C'}}>Relatório Quinzenal</Text>
          </View>
          <View style={styles.containerUpload}>

              <View style={styles.formUpload}>
                   
                    <TextInput 
                        placeholder="Observações"
                        style={styles.input}
                        multiline
                        numberOfLines={4}
                    />

                  <TouchableOpacity style={styles.btnSelectImage}>
                     <Icon name="phone" size={15} color='#FFF' style={{marginRight: 15}}/>
                     <Text style={styles.txtBtn}>Selecionar imagem</Text>
                  </TouchableOpacity> 

                  <TouchableOpacity style={styles.btnUploadImage}>
                     <Icon name="upload" size={15} color='#FFF' style={{marginRight: 15}}/>
                     <Text style={styles.txtBtn}>Enviar</Text>
                  </TouchableOpacity> 
            
              </View>


          </View>
      </View>
    );
  }
  
}

