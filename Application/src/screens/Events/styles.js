import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:  'center',
    
    },

    headerElement: {
        width: '100%',
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        borderColor: 'lightblue',
        borderWidth: 1
    },

    eventImageBanner: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
 

    title: {
        fontSize: 18,
        fontWeight: '600',
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
    },

    containerScroll: {
        width: '100%',
        flex: 1,

    },

    cardContainer: {
        width: '100%',
        height: 290,
        backgroundColor: 'white',
        marginVertical: 10
    },

    imgEvent: {
        resizeMode: 'cover',
        width: '100%',
        height: '75%',  

    },

    eventDescription: {
        paddingHorizontal: 10
    },

    
    infoLocationDate: {
        width: '100%',
        flexDirection: 'column',
        height: '25%'

    },

    groupInfo: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
       
        
    },


    info1: {
        width: '40%',
        alignItems: 'center',
        flexDirection: 'row',
       
    },
   
})

export default styles