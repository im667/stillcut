import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <>
      <ContactWrap>
        <Title>
          <h2>Contact</h2>
        </Title>
        <InfoWrap>
          <Profile>
            <span>✥</span>
            <Email>ohyeon0425@daum.net</Email>
            <span>✥</span>
            <Mobile>010.5626.0425</Mobile>
            <span>✥</span>
          </Profile>
        </InfoWrap>
      </ContactWrap>
    </>
  );
}

export default Contact;

const ContactWrap = styled.div`
  display: flex;
  margin-top: 36px;
  flex-direction: column;
  justify-content: center;
  height: 240px;
`;

const Title = styled.div`
  border-bottom: 3px solid black;
  h2 {
    font-weight: 900;
    font-size: 36px;
    margin-left: 32px;
    margin-bottom: 16px;
  }
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px;
`;

const Email = styled.span`
  margin: 24px;
  font-size: 24px;
`;

const Mobile = styled.span`
  margin: 24px;
  font-size: 24px;
`;
