import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    boxImage: {
        alignSelf: 'stretch',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray'
    },

    DogImage: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        height: 250,
        resizeMode: 'stretch',

    },

    boxInfoBasic: {
        height: 110,
        alignSelf: 'stretch',
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
        alignSelf: 'stretch',
        margin: 5,
        height: 150,
        alignItems: 'center'
    },

    txtDetail: {
        alignSelf: 'stretch',
        margin: 1,
        color: 'dimgray',
        textAlign: 'center',
        fontSize: 15,
        maxHeight: 150,
        minHeight: 150,

    },

    boxExtraDetail: {
        alignSelf: 'stretch',
        height: 50,
        margin: 5,
        borderColor: 'lightblue',
        borderRightWidth: 2
    },

    buttons: {
        width: 250,
        height: 35
    }
})

export default styles