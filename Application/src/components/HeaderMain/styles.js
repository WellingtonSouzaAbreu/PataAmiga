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

    menuDrawerButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },

    logoTitleGroup: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    
    logoImage: {
        width: 40,
        height: 40
    },

    title: {
        fontWeight:'bold',
        fontSize: 20,
        color: '#64718C'
    }

})

export default styles