import { StyleSheet } from 'react-native'
import commonStyles from './../../common/commonStyles.js'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    imageBrowserContainer: {
        backgroundColor: 'ghostwhite', //TODO Efeito de transparência
        height: '70%',
        padding: 20
    },

    browserConfirmArea: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        backgroundColor: 'ghostwhite',
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
        borderBottomColor: 'lightblue'
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
        borderRadius: 5,
    },
    
    formUpload: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 5,
    },

    descriptionInput: {
        width: '100%',
        padding: 2,
        borderColor: '#f2f2f2',
        borderWidth: 1,
        backgroundColor: '#f2f2f2',
        textAlign: 'center',
        height: '40%',
        marginBottom: 20,
        marginHorizontal: 2,
    },

    btSelectImage: {
        width: '100%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    buttonUpload: {
        width: '100%',
        height: 45
    },
})

export default styles