import styled from "@emotion/styled";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Wrapper = styled.div`
  width: 764px;
  height: 240px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
`;

export const Div = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 240px;
  background: linear-gradient(95.18deg, #6400FF 0.47%, #E3D1FF 102.52%, #D0B1FF 102.52%);
  border: 4px solid #fff;
  border-radius: 10px;
`;

export const Span = styled.span`
  height: 100%;
  font-size: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: transparent;
`

export const Img = styled.img`
  
`;

const SliderStyles = styled(Slider)` 
  background-color: transparent;
  ul {
    margin-bottom: 50px;
    color: white;
  }

  ul li button::before {
    color: white;
  }
  .slick-dots li.slick-active button:before {
    color: white
  }
`;

export default function BANNER() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <Wrapper>
      <SliderStyles {...settings}>
        <Div>
          <Span>
            Carousel
            <Img src="/img/rocket-white.png" />
          </Span>
        </Div>
        <Div>
          <Span>
            Carousel
            <Img src="/img/rocket-white.png" />
          </Span>
        </Div>
        <Div>
          <Span>
            Carousel
            <Img src="/img/rocket-white.png" />
          </Span>
        </Div>
      </SliderStyles>
    </Wrapper>
  );
}
