import React from "react";
import styled from "styled-components";

function ContentsNone() {
  return (
    <MsgContainer>
      <MsgBox>
        <Msg>
          <UnderConstruction>
            <span>Under</span>
            <span>distruction</span>
          </UnderConstruction>
          <span>업데이트 중</span>
        </Msg>
      </MsgBox>
    </MsgContainer>
  );
}

export default ContentsNone;

const MsgContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MsgBox = styled.div`
  display: flex;
  height: 1000px;
  width: 1000px;
  align-items: center;
  justify-content: center;
`;

const Msg = styled.div`
  font-size: 52px;
`;

const UnderConstruction = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  height: 80px;
  justify-content: center;
  align-items: center;
  background-color: gold;
  margin-bottom: 36px;
  border: 4px dashed black;
  border-radius: 10px;
  span {
    font-size: 24px;
    font-weight: 700;
  }
`;
