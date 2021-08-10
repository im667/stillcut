import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Slide from "../Components/Slide.js";
import SlideText from "../Components/SlideText.js";
import Marquee from "react-fast-marquee";
import MainContents from "../Components/MainContents.js";
import Contact from "../Components/Contact.js";

function Main() {
  return (
    <>
      <MainWrap>
        <TextBar>
          <Marquee
            speed="200"
            gradientWidth="0"
            delay="0"
            play="true"
            pauseOnHover="true"
          >
            OHYEONKWON @HEADBINGBING__ OHYEONKWON @HEADBINGBING__ OHYEONKWON
            @HEADBINGBING__ OHYEONKWON @HEADBINGBING__ OHYEONKWON
            @HEADBINGBING__ OHYEONKWON @HEADBINGBING__ OHYEONKWON
            @HEADBINGBING__
          </Marquee>
        </TextBar>
        <Slide />
        <SlideText />
        <TextBarBottom>
          <Marquee
            speed="200"
            gradientWidth="0"
            delay="0"
            play="true"
            pauseOnHover="true"
            direction="right"
          >
            OHYEONKWON @HEADBINGBING__ OHYEONKWON @HEADBINGBING__ OHYEONKWON
            @HEADBINGBING__ OHYEONKWON @HEADBINGBING__ OHYEONKWON
            @HEADBINGBING__ OHYEONKWON @HEADBINGBING__ OHYEONKWON
            @HEADBINGBING__
          </Marquee>
        </TextBarBottom>
        <SubTitle>
          <h2>NEW ARTWORK</h2>
        </SubTitle>
        <MainContents />
        <Contact />
      </MainWrap>
    </>
  );
}

export default withRouter(Main);

const MainWrap = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
`;

const TextBar = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  margin-top: 24px;
  background-color: black;
  align-items: center;
  color: white;
  font-size: 32px;
  font: italic 1.3em TmonMonsori;
`;

const TextBarBottom = styled.div`
  display: flex;
  height: 50px;
  background-color: black;
  align-items: center;
  color: white;
  font-size: 32px;
  font: italic 1.3em TmonMonsori;
`;

const SubTitle = styled.div`
  width: 100%;
  margin-top: 32px;
  margin-bottom: 32px;
  border-bottom: 3px solid black;
  h2 {
    font-weight: 900;
    font-size: 36px;
    margin-left: 32px;
    margin-bottom: 16px;
  }
`;
