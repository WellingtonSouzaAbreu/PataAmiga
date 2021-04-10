import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD04A',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
    },

    dogCard: {
        alignSelf: 'stretch',
        height: 160,
        backgroundColor: '#ffffff',
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1, paddingHorizontal: 5
    },

    dogInfo: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center'

    },

    dogImageContainer: {
        width: 165,
        height: 165
    },

    dogImage: {
        width: 165,
        height: 165,
        resizeMode: 'contain'
    },

    infoDogContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: 160,
        padding: 5
    },

    groupInfoIcon: {

        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2
    },

    containerListCards: {
        padding: 10,
    },


    flatlistDogs: {
        alignSelf: 'stretch',
        flex: 1,
    },

    buttonDetail: {
        width: 140,
        height: 30,
        alignSelf: 'center'
    },
})

export default styles