import React from 'react'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import styled from 'styled-components'

function ImageSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 10000,
        autoplay: true
    }

  return (
        <Carousel {...settings} >
            <Wrap>
                <img src="/images/vision.png" />
            </Wrap>
            <Wrap>
                <img src="/images/mission.png" />
            </Wrap>
            <Wrap>
                <img src="/images/CICT.png" />
            </Wrap>
        </Carousel>
  )
}

export default ImageSlider

const Carousel = styled(Slider)`
    margin-top: 20px;
    

    ul li button {
        &:before{
            font-size: 10px;
            color: rgb(130, 65, 66);
        }
    }

    li.slick-active button:before{
        color: black;
    }

    .slick-list {
        overflow: hidden;
    }

    button {
        z-index: 1;
    }


`

const Wrap = styled.div`
    cursor: pointer;
    img {
        display: flex;
        border: 4px solid transparent;
        border-radius: 4px;
        width: 50%;
        height: 50%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }
`
