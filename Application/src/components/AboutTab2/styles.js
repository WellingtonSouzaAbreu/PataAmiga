import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 4,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    txtStatic: {
        width: Dimensions.get('window').width - 10, // padding do container
        textAlign: 'center',
        fontSize: 17,
        color: '#979DA6',
        fontWeight: 'bold',
    },

    imgAboutDo: {
        height: Dimensions.get('window').height * 0.3,
        width: '100%',
        resizeMode: 'cover',
        marginVertical: 10
    },

    imgAboutDoVetor: {
        width: '100%',
        height: Dimensions.get('window').height * 0.4,
        resizeMode: 'contain'
    },
})

export default styles