import React, { Component, useState } from 'react'
import { SliderBox } from "react-native-image-slider-box";
import { baseApiUrl } from '../../common/baseApiUrl';

export default function Slider(props) {
    const setImagesURL = () => {
        let imagesURL = []

        console.log(Object.entries(props))

        Object.values(props).forEach(object => {
            if(object.imageURL){
                imagesURL.push(`${baseApiUrl}/${props.imageSource}-pictures/${object.imageURL}`)
            }
        })

        console.log(imagesURL)
        return imagesURL
    }

    let imagesURL = setImagesURL()

    return (
        <SliderBox
            dotColor="#F28749"
            autoplay
            circleLoop
            images={imagesURL} />
    )
}