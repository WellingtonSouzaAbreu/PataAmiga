import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 35,
    },

    drawerContainerInfos: {
        height: 160,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#F28749',
        borderBottomWidth: 2
    },

    containerImg: {
        width: '50%',
        height: '50%',

    },

    logoImg: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    },

    presentationDrawerContainer: {
        alignItems: 'center',
        height: '30%'
    },

    txtPresentation: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#64718C'
    },

    socialMedias: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    media:{
        paddingHorizontal: 10,
        paddingVertical: 5
    }
})

export default styles