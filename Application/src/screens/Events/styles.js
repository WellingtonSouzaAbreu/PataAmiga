import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        padding: 5,
    },

    header: {
        width: '100%',
        height: Dimensions.get('window').height * 0.07,
        justifyContent: 'center',
        alignItems: 'center',
    },

    headerImage: {
        height: '100%',
        width: '60%',
        resizeMode: 'cover',
    },

    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 2
    },

    line: {
        width: '70%',
        padding: 1,
        marginTop: 15,
        marginBottom: 20,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
    },

    flatlistEvents: {
        width: '100%',
        flex: 1,
    }
})

export default styles