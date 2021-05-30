import React, {Component,} from 'react'
import { View, Text, Modal,TouchableOpacity,Image} from 'react-native'
import styles from './styles'
import  ModalContentHistory from './../ModalHistoryAnimal'


export default class CardAdopted extends Component{
    state = {
        modalVisible: false
      };
    
      setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
      }
    
    render(){
        const { modalVisible } = this.state;

        return(
            <View style={styles.cardAdoption}>
                 <Modal
                animationType= "slide"
                visible= {modalVisible}
                style={styles.modalContainer}
                onRequestClose={() => {
                    this.setModalVisible(!modalVisible);
                  }}
                >
                    <ModalContentHistory/>
                    
                </Modal>


                <Image style={styles.imgAdoption} source={require('./../../assets/imgs/img1.jpg')}/>
                    <View style={styles.groupInfoAdoption}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.txtDate}>Adotado: </Text>
                             <Text style={styles.txtDate}>05/02/2021</Text>
                       
                        </View>
                        
                        <TouchableOpacity  style={styles.btMoreInfo}  onPress={() => this.setModalVisible(true)} >
                            <Text style={{color: '#fff', fontWeight: 'bold'}}>
                            História
                            </Text>       
                        </TouchableOpacity>
                        </View>
                    
             </View>
        )
    }
}