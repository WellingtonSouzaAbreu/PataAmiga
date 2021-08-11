import React from 'react'
import { TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles.js'

const AuthInput = (props) => {
    return (
        <View style={styles.container}>
            <TextInput {...props} style={styles.input} />
            <Icon name={props.icon} size={20} style={styles.icon} onPress={props.onToggleVisibility}/>
        </View>
    )
}

export default AuthInput