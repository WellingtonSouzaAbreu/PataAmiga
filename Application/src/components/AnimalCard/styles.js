import {StyleSheet}  from 'react-native'
import commonStyles from './../../common/commonStyles.js'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    dogCard: {
        width: '98%',
        backgroundColor: '#ffffff',
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        flex: 1, 
        paddingHorizontal: 5,
        marginBottom: 5,
        shadowColor: "#000",
        shadowRadius: 3.46,
        elevation: 2,
        ...commonStyles.boxShadow,
    },

    dogInfo: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },

    imageContainer: {
        flex: 1,
    },

    dogImage: {
        width: '100%',
        height: '96%',
        resizeMode: 'contain'
    },

    infoDogContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 10
    },

    groupInfoIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2
    },

    buttonDetail: {
        width : '100%',
        height: 30,
        alignSelf: 'center'
    }
})

export default styles