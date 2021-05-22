import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:  'center',
    
    },

    headerElement: {
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#F27F3D',
        marginBottom: 10
    },

    eventImageBanner: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
 

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 2,
        color: '#64718C'
       
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
    },

    containerScroll: {
        width: '100%',
        flex: 1,
        padding: 10,
 

    },

   
})

export default styles