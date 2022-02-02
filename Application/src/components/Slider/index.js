import React from 'react'
import { SliderBox } from "react-native-image-slider-box";
import { baseApiUrl } from '../../common/baseApiUrl';

export default function Slider(props) {
    function setImagesURL(){
        let imagesURL = []

        console.log(Object.entries(props))

        Object.values(props).forEach(object => {
            if (object.imageURL) {
                imagesURL.push(`${baseApiUrl}/${props.imageSource}-pictures/${object.imageURL}`)
            }
        })

        console.log(imagesURL)
        return imagesURL
    }

    let imagesURL = setImagesURL()

    return (
        <SliderBox
            onCurrentImagePressed={(indexImage) => props.onPress && props.onPress(true, indexImage)}
            dotColor="#F28749"
            autoplay
            circleLoop
            images={[
                "http://192.168.2.183:500/publication-pictures/1637419697088_dobermann.jpg",
                "http://192.168.2.183:500/publication-pictures/1637419697088_dobermann.jpg",
              ]}
            style={props.style && props.style}

        />
    )
}