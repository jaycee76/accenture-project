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
        autoplay: true,
    }

  return (
        <Carousel {...settings} >
            <Wrap1>
                <a>
                <img src="/images/CICT.png" />
                <span>Web-based Faculty <br/>Management Information System</span>
                </a>
            </Wrap1>
            <Wrap>
                <img src="/images/vision.png" />
            </Wrap>
            <Wrap>
                <img src="/images/mission.png"/>
            </Wrap>
        </Carousel>
  )
}

export default ImageSlider

const Carousel = styled(Slider)`
    margin-top: 150px;
    margin-left: 20px;
    

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
        border: 2px solid rgba(130, 65, 66, 0.5);
    }

    button {
        z-index: 1;
    }


`

const Wrap = styled.div`
    cursor: pointer;
    img {
        width: 900px;
        height: 230px;
        padding-top: 120px;
    }

    img2 {
        width: 900px;
        height: 230px;
        padding-top: 120px;
        padding-left: 30px;
    }
`
const Wrap1 = styled.div`
    img {
        width: 50%;
        height: 50%;
    }

    a{
        display: flex;
        align-items: center;
    }

    span{
        font-size: 70px;
        margin-left: 20px;
    }

`