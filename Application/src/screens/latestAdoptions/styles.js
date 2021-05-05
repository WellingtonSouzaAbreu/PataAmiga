import {StyleSheet} from 'react-native' 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
    },

    containerScroll: {
        width: '100%',
        flex: 1,
    },

    scrollAdotpion: {
        width: '100%',
        flex: 1,
        padding: 10
    },
    cardAdoption: {
        width: '100%',
        height: 220,
        backgroundColor: 'white',
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 3.46,
        elevation: 4,
        borderRadius: 5

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
        padding: 5,
        alignItems: 'center',
        justifyContent: 'space-between'

        
    },

    btMoreInfo: {
        width: 100,
        height:20,
    
    }

})
export default styles