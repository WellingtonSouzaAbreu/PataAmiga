import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
       
    },

    headerElement: {
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'lightblue'

    },

    imgElement: {
        width: 120,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
       
    },

    containerUpload: {
        width: '100%',
        flex: 1,
 
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 15,
        borderRadius: 5,
        
    },


    formUpload: {
        width: '100%',
        height: '75%',
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'white'
    },

    input: {
        width: '100%',
        borderColor: '#f2f2f2',
        borderWidth: 1,
        backgroundColor: '#f2f2f2',
        textAlign: 'center',
        height: '50%',
        marginBottom: 20
    },

    btSelectImage: {
        width: '100%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonUpload: {
        width: '100%'
    },
})

export default styles