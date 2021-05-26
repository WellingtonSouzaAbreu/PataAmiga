import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
        
    },

    boxImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray'
    },

    dogImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
    },

    boxBasicInfos: {
        width: '95%',
        borderRadius: 5,
        height: 200,
        marginVertical: 10,
        backgroundColor:'#fff',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        
    },

    nameOfAnimal: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 15,
        flexDirection: 'row',
        height: 30,
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1,
        
        justifyContent: 'space-between',
        
    },

    containerInfos: {
        width: '100%',
        padding: 5,
        

    },

    InfoGroup: {
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row'
    },

    info: {
        width: '32%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 5
    },

    boxOtherInfos: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        height: 100,
        justifyContent: 'space-between'
    },

    otherInfoGroup: {
        flexDirection: 'row',
        height: 25,
        width: '70%',
        alignItems: 'center',
        
    },

    descriptionBox: {
        width: '100%',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        
        
    },

    txtTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#64718C',
     
        width: '100%', 
        textAlign: 'center',
        marginBottom: 5

    },

    txtDescription: {
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

    containerButtons: {
        width: '100%',
        padding: 15,

    },

    btnInteress: {
        width: '100%',
        height: 45,
        justifyContent: 'center', alignItems: 'center',
        backgroundColor: '#64718C',
        borderRadius: 2,
    },

    btnShare: {
        justifyContent: 'center',
        alignItems: 'center'
    }

    
})

export default styles