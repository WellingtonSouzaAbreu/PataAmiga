import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({



    boxShadow: {
        shadowColor: "#000000",
        shadowOpacity: 0.9,
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 3
        }
    },

    textShadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5
    },
    
    activeBorders: {
        borderColor: 'red',
        borderWidth: 1
    },

 


})

export default styles