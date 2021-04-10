import  React, {Component} from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import { Input, Button  } from 'galio-framework';
import Icon from 'react-native-vector-icons/Feather'


export default class Login extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Image style={styles.logoImg} source={require('./../assets/images/Logo.png')}/>
        <Text style={styles.txtLoginElement}>Ajude a salvar um a vida de um cãozinho. Adote.</Text>
        
        <View style={styles.containerLoginForm}>
           <Text style={{fontSize: 18}}>BEM VINDO</Text> 
           <Input
            placeholder="Usuário"
            right
            icon="user"
            family="antdesign"
            iconSize={18}
            iconColor="black"
          />
          <Input placeholder="password" password viewPass />
          <Text style={{alignSelf: 'flex-start'}}>Esqueci minha senha.</Text>
          <Button style={styles.buttons} color="#4682B4">Entrar</Button>
          <Button style={styles.buttons} color="#6495ED">Cadastrar</Button>
        </View>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: '#EEE8AA',
      paddingHorizontal: 8
    },

    logoImg: {
      width: 160,
      height: 160,
      resizeMode: 'contain'
    },

    txtLoginElement: {
      fontSize: 15,
    },

    containerLoginForm: {
      backgroundColor: '#ffffff',
      alignSelf: 'stretch',
      height: 300,
      borderRadius: 5,
      paddingHorizontal: 20,
      paddingVertical: 10,
      alignItems: 'center'
    },

    buttons: {
      width: 350
    },

})
