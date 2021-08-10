import React from "react";
import styled from "styled-components/macro";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slideText = [
  { id: 1, content: "WELCOME" },
  { id: 2, content: "ArtWork from" },
  { id: 3, content: "@Headbingbing" },
  { id: 4, content: "OHYOEN KWON" },
];

const SLIDER_OPTION = {
  infinite: true,
  speed: 350,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 600,
  pauseOnHover: true,
  draggable: true,
};

function SlideText() {
  return (
    <Wrap>
      <StyleSlider {...SLIDER_OPTION}>
        {slideText.map((text) => {
          return (
            <div key={text.id}>
              <TextContainer>
                <Text>{text.content}</Text>
              </TextContainer>
            </div>
          );
        })}
      </StyleSlider>
    </Wrap>
  );
}

export default SlideText;

const StyleSlider = styled(Slider)`
  .slick-next {
    display: none;
  }
  .slick-prex {
    display: none;
  }
`;

const Wrap = styled.div`
  position: absolute;
  width: 90%;
  top: 20%;
  left: 43%;
  transform: translate(-50%, -50%);
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  height: 200px;
  background-color: black;
  z-index: 15;
  span {
    color: pink;
    font-size: 200px;
  }
`;

const Text = styled.span`
  display: flex;
  width: 90%;
  height: 200px;
  overflow: hidden;
`;
