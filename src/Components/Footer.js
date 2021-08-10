import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

function Footer() {
  return (
    <>
      <FooterWrap>
        <FooterText>
          <span>StillCut! Copyright 2021.</span>
          <span>
            OHYEONKWON All pictures cannot be copied without permission.
          </span>
        </FooterText>
        <FooterLogo>
          <img src="/images/FooterLogo.png" alt="FooterLogo" />
        </FooterLogo>
      </FooterWrap>
    </>
  );
}

export default withRouter(Footer);

const FooterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: pink;
  margin-top: 40px;
  width: 100%;
  height: 200px;
`;

const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  font-weight: 600;
  color: black;
`;

const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  font-weight: 600;
  color: black;
  img {
    width: 300px;
    border-bottom: 3px solid black;
  }
`;
