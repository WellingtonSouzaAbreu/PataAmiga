import { StyleSheet, Dimensions } from 'react-native'

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4,
        padding: 5,
        backgroundColor: '#fff',
    },

    txtStatic: {
        width: Dimensions.get('window').width - 10, // padding do container
        fontSize: 17,
        color: '#979DA6',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    AboutImg1: {
        height: Dimensions.get('window').height * 0.3,
        width: '100%',
        resizeMode: 'cover',
        marginVertical: 10
    },

    aboutScroll: {
        marginVertical: 15,
        alignSelf: 'stretch',
    },

    AboutImgScroll: {
        width: 110,
        height: 110,
        margin: 5
    },
}

export default styles