import commonStyles from './../../common/commonStyles.js'
import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },


    imageContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
    },

    dogImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover' // TODO Retirar atributo e colocar modal
    },

    basicInfosContainer: {
        width: '97%',
        borderRadius: 5,
        height: 200,
        marginVertical: 10,
        backgroundColor: '#fff',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    headerInfos: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 15,
        flexDirection: 'row',
        height: 30,
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
    },

    headerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    iconStyle: {
        marginRight: 5
    },

    infoCardsContainer: {
        width: '100%',
        padding: 5,
    },

    InfoGroup: {
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
    },

    cardInfo: {
        width: '32%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
    },

    infoLabel: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 17
    },

    infoValue: {
        color: '#64718C',
        fontWeight: 'bold',
        fontSize: 17
    },

    otherInfosContainer: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        height: 100,
        justifyContent: 'space-between',
    },

    infoArea: {
        width: '65%',
        justifyContent: 'space-between',
    },

    otherInfoGroup: {
        marginVertical: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },

    shareArea: {
        height: 85,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '35%',
        padding: 10
    },

    shareButton: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    descriptionContainer: {
        width: '100%',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    descriptionLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#64718C',
        width: '100%',
        textAlign: 'center',
        marginBottom: 5

    },

    descriptionValue: {
        fontSize: 15,
        fontWeight: '600',
        color: 'gray',
        paddingVertical: 10,
        textAlign: 'center',
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1,
        borderTopColor: '#f2f2f2',
        borderTopWidth: 1,
    },

    buttonContainer: {
        width: '97%',
    },

    buttonExpressInterest: {
        width: '100%',
        marginBottom: 10,
        height: 45,
        justifyContent: 'center', alignItems: 'center',
        backgroundColor: '#64718C',
        borderRadius: 2,
    },

    buttonLabel: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 16
    }

})

export default styles