import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    boxImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray'
    },

    dogImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
    },

    boxInfoBasic: {
        height: 110,
        width: '100%',
        flexDirection: 'row',
        margin: 5,
        borderRadius: 5,
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    itemInfo: {
        height: 100,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        borderBottomColor: 'lightblue',
        borderBottomWidth: 2
    },

    boxInfoDetailed: {
        width: '100%',
        margin: 5,
        height: 150,
        alignItems: 'center'
    },

    txtDetail: {
        width: '100%',
        margin: 1,
        color: 'dimgray',
        textAlign: 'center',
        fontSize: 15,
        padding: 10

    },

    boxExtraDetail: {
        width: '100%',
        height: 50,
        padding: 10,
        margin: 5,
        borderColor: 'lightblue',
        borderRightWidth: 2
    },

    buttons: {
        width: '90%',
        height: 35
    }
})

export default styles