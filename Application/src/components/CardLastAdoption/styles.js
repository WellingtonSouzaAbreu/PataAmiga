import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    cardAdoption: {
        width: '100%',
        height: 240,
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

    txtDate: {
        fontSize: 16, 
        fontWeight: 'bold',
        color: '#979DA6'
    },
    imgAdoption: {
        width: '100%',
        resizeMode: 'cover',
        height: '80%'

    },
    groupInfoAdoption: {
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'space-between'

        
    },

    btMoreInfo: {
        width: 100,
        height:30,
        backgroundColor: '#F28749',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        
    },

    

})
export default styles