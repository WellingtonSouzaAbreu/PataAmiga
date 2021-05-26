import React, {Component}from 'react'
import { Text, View, TextInput, Image, TouchableOpacity,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Button, RadioButton  } from 'react-native-paper';

import styles from './styles.js'

const RadioRequest = () => {
    const [checked, setChecked] = React.useState('first');
  
    return (
      <View style={styles.radioComponent}>
          <View style={styles.radioContainer}>
            <RadioButton
                value="first"
                color= "#F28749"
                status={ checked === 'first' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('first')}
            />
            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'dimgray'}}>Abandono</Text>
          </View>
          <View style={styles.radioContainer}>
            <RadioButton
                value="second"
                color= "#F28749"
                status={ checked === 'second' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('second')}
            />
            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'dimgray'}}>Maus tratos</Text>
          </View>
        
      </View>
    );
  };


  
export default class Report extends Component {
    
    render(){
        
        return(
            <View style={styles.container}>
                <ScrollView style={styles.scrollReport}>
                <View style={styles.boxElement}>
                </View>
                <View style={styles.boxFormReport}>
                    <Text style={{fontSize: 20,color: '#64718C', margin: 5, fontWeight: 'bold'}}>Fazer uma denuncia</Text>
                    <View style={styles.containerRadioSelect}>
                        <Text style={{fontWeight: 'bold', fontSize: 15,color: '#64718c'}}>Tipo da denúncia</Text>
                        <RadioRequest/>
                    </View> 
                </View>
                <View style={styles.inputForm}>
                    <TextInput
                        style={styles.inputAndress}
                        placeholder='Endereço do ocorrido'
                    />  
                    <TextInput
                        style={styles.inputDetailsReport}
                        placeholder='Forneça os detalhes do ocorrido'
                        multiline= {true}
                    />
                
                    <TouchableOpacity style={styles.btnReport}>
                        <Text style={{fontWeight: 'bold',color: '#fff'}}>Denunciar</Text>
                    </TouchableOpacity>
                </View>             
                </ScrollView>
                   
          </View>
        )
        
    }
}