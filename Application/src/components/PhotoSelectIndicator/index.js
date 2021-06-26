import React from 'react'
import { View, Text } from 'react-native'

const PhotoSelectIndicator = (props) => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
        }}>
            <View style={{
                backgroundColor: 'yellow',
                width: '20%',
                height: '20%',
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                margin: 4
            }}>
                <Text style={{ color: 'black' }}>{props.value}</Text>
            </View>
        </View>
    )
}

export default PhotoSelectIndicator