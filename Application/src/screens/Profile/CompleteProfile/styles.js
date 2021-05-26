import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:  'center',
        backgroundColor: 'white',
        justifyContent:'center'
    },

    imgAsset:{
        width: 120,
        height: 120,
        resizeMode: 'cover',
        marginVertical: 10,
      
    },  
  
    formCompletePefil: {
        width: '100%',
        height: '60%',
        paddingHorizontal: 10,
        marginBottom: 15,
        justifyContent: 'center',
     
        

    },
    inputEmail: {
        height: 50,
        borderBottomWidth: 1, 
        borderBottomColor: '#cdcdcd'
    },

    containerInput: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    inputAndress: {
        width: '48%',
        height: 50,
        borderBottomWidth: 1, 
        borderBottomColor: '#f2f2f2'
    },

    btSave: {
        width: '95%',
        height: 45,
        backgroundColor: '#64718C',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    }

})

export default styles