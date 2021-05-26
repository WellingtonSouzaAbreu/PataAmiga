import React, {Component,useState} from 'react'
import { SliderBox } from "react-native-image-slider-box";

export default class SliderImg extends Component{
    constructor(props) {
        super(props);
        this.state = {
            images: [
                require('./../../../assets/imgs/img1.jpg'),
                require('./../../../assets/imgs/img2.jpg')
            ]
        }
    }
    render(){
        return(
            <SliderBox 
                dotColor="#F28749"
                autoplay
                circleLoop
                images={this.state.images} />
        )
    }
}