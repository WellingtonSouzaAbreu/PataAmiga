import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 0,
    },

    refreshButton: {
        width: Dimensions.get('window').width,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginRight: 15,
        marginTop: 10
    },

    flatlistDogs: {
        width: '100%',
        flex: 1,
        padding: 5,
    },
})

export default styles