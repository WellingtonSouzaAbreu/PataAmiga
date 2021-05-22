import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:  'center',
        backgroundColor: 'white'
    
    },

    TopBar: {
        width: '100%',
        height: 80,
        backgroundColor: '#CDC6DA',
        marginBottom: 5
        
    },

    btnGridContainer: {
        width:'100%',
        
        alignItems: 'center',
        height: 150,

        padding: 10
    },

    gridButton: {
        width: '100%',
        height: 60,
        margin: 3,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },  
   
    buttonNavigate: {
        width: '32.5%',
        height: 60,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 3.46,

        elevation: 4,
    },
   
    containerTabNavigationHome: {
        width: '100%',
        flex: 1,
        backgroundColor: '#cdcdcd'
    },

    txtButton: {
        color: 'dimgray',
        fontWeight: 'bold'
    },
})

export default styles