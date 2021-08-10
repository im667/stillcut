import React from "react";
import styled from "styled-components/macro";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  { id: 1, url: "/images/slide/slide1.jpg" },
  { id: 2, url: "/images/slide/slide2.jpg" },
  { id: 3, url: "/images/slide/slide3.jpg" },
  { id: 4, url: "/images/slide/slide4.jpg" },
];

const SLIDER_OPTION = {
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 600,
  pauseOnHover: true,
  draggable: true,
};

function Slide() {
  return (
    <>
      <Slider {...SLIDER_OPTION}>
        {items.map((item) => {
          return (
            <div key={item.id}>
              <ImageContainer>
                <Image src={item.url} />
              </ImageContainer>
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default Slide;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border-radius: 10px;
  z-index: 10;
`;

const Image = styled.img`
  width: 100%;
  height: 800px;
  max-height: 800px;
  transition: 0.1s;
  overflow: hidden;
  object-fit: cover;
  &:hover {
    transform: scale(1.15);
  }
`;
