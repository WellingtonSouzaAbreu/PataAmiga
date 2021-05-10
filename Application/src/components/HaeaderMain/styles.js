import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    btnMenuDrawer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },

    groupLogoTitle: {

        flexDirection: 'row',
        alignItems: 'center'
    },

    txtTitle: {
        fontWeight:'bold',
        fontSize: 20
    },

    logoImg: {
        width: 40,
        height: 40
    }
})

export default styles