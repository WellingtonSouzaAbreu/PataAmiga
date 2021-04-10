import {StyleSheet} from 'react-native'

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
      }
})

export default styles