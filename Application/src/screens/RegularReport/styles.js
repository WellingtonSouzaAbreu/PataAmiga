import { StyleSheet } from 'react-native'
import commonStyles from './../../common/commonStyles.js'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    // TODO tranformar em componente
    imageBrowserContainer: {
        backgroundColor: 'ghostwhite', //TODO Efeito de transparência
        height: '90%',
        padding: 0,
        borderColor: 'white',
        borderWidth: 1
    },

    browserConfirmArea: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        backgroundColor: 'ghostwhite',
        position: 'absolute',
        backgroundColor: 'transparent',
        alignSelf: 'flex-end',
        top: '83%'
    },

    checkIcon: {
        backgroundColor: 'black',
        borderRadius: 60,
        paddingHorizontal: 4,
        color: 'white'
    },

    browserFooter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },


    headerElement: {
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#F27F3D'

    },

    imgElement: {
        width: 120,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',

    },

    containerUpload: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 5,
    },

    formUpload: {
        width: '100%',
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-between',

    },

    observationsInput: {
        width: '100%',
        borderColor: '#f2f2f2',
        borderWidth: 1,
        backgroundColor: '#f2f2f2',
        textAlign: 'center',
        marginVertical: 40,
        height: '50%'
    },

    areaButtons: {
        width: '100%',
        height: '30%',
        justifyContent: 'flex-end'
    },

    btnSelectImage: {
        width: '100%',
        height: 45,
        justifyContent: 'center',
        borderRadius: 3,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#64718C',
        marginBottom: 10
    },

    btnUploadImage: {
        width: '100%',
        height: 45,
        justifyContent: 'center',
        borderRadius: 3,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#F27F3D',
        marginBottom: 10
    },

    txtBtn: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 15
    },

})

export default styles