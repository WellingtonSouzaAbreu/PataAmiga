import React from 'react'
import { View, Text } from 'react-native'
import ImageView from 'react-native-image-viewing'

import { baseApiUrl } from '../../common/baseApiUrl'

const CustomImageView = (props) => {
    const formatURLs = () => {
        return props.imagesURL.map(image => {
            let imageURI = {
                uri: `${baseApiUrl}/${props.imageSource}-pictures/${image.imageURL}`
            }
            return imageURI
        })
    }

    if (!props.imagesURL) {
        return (
            <View>
                <Text>Não foi possível carregar as imagens!</Text>
            </View>
        )
    }

    const imagesURI = formatURLs()

    return (
        <ImageView
            images={imagesURI}
            imageIndex={props.index}
            visible={props.visible}
            onRequestClose={() => props.onToggleImageViewVisibility(false)}
        />
    )
}

export default CustomImageView