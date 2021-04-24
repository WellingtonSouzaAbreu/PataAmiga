import {StyleSheet} from 'react-native' 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: 'center',
    },

    containerScroll: {
        width: '100%',
        flex: 1,
    },

    scrollAdotpion: {
        width: '100%',
        flex: 1
    },
    cardAdoption: {
        width: '100%',
        height: 220,
        backgroundColor: 'white',
        marginVertical: 10

    },  

    imgAdoption: {
        width: '100%',
        resizeMode: 'cover',
        height: '85%'

    },
    groupInfoAdoption: {
        width: '100%',
        height: '15%',
        flexDirection: 'row',
        padding: 2,
        alignItems: 'center',

        
    },

})
export default styles