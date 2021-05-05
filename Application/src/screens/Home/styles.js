import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 0,
    },

    dogCard: {
        width: '100%',
        height: 160,
        backgroundColor: '#ffffff',
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1, paddingHorizontal: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 3.46,
        elevation: 4,

    },

    dogInfo: {
        flex: 1,
        width: '100%',
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
        justifyContent: 'space-between',
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
        width: '100%',
        flex: 1,
    },

    buttonDetail: {
        width : '100%',
        height: 30,
        alignSelf: 'center'
    },
})

export default styles