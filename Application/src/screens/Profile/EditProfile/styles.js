import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:  'center',
        backgroundColor: 'white',
        paddingVertical: 30
    },

    imgAsset:{
        width: 150,
        height: 150,
        resizeMode: 'cover',
        marginVertical: 10,
      
    },  
  
    formCompletePefil: {
        width: '100%',
        height: '70%',
        paddingHorizontal: 10,
        marginBottom: 15,
    

        justifyContent: 'center'
        

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
        borderBottomColor: '#cdcdcd'
    },

    btSave: {
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        backgroundColor: '#64718C',
        borderRadius: 2
    }

})

export default styles