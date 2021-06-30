import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },
    
    animalSelect: {
        height: 100,
        flexDirection: 'row'
    },

    animalSelectImage: {
        resizeMode: 'contain',
        height: '100%',
        width: '50%',
    },

    InfoSelect: {
        padding: 5
    },

    title: {
        fontSize: 16 ,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10
    },
})

export default styles