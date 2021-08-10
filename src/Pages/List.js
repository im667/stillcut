import React, { useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import Contents from "../Components/List/Contents";
import ContentsNone from "../Components/List/ContentsNone";

const content = [
  {
    tab: "Charactor",
    content: <Contents />,
  },
  {
    tab: "Situation",
    content: <ContentsNone />,
  },
];

function List() {
  const useTabs = (initialTabs, allTabs) => {
    const [contentIndex, setContentIndex] = useState(initialTabs);
    return {
      contentItem: allTabs[contentIndex],
      contentChange: setContentIndex,
    };
  };
  const { contentItem, contentChange } = useTabs(0, content);
  const [isSelected, setIsSelected] = useState("Charactor");

  const handleClickTab = ({ target: { innerHTML } }) => {
    setIsSelected(innerHTML);
  };

  console.log(isSelected);

  return (
    <>
      <ListWrap>
        <ListCategory>
          <Title>
            <h2>STILLCUTS</h2>
          </Title>

          {content.map((section, index) => (
            <TabBtn
              isSelected={section.tab === isSelected}
              onClick={(e) => {
                contentChange(index);
                handleClickTab(e);
              }}
            >
              {section.tab}
            </TabBtn>
          ))}
        </ListCategory>

        {contentItem.content}
      </ListWrap>
    </>
  );
}

export default withRouter(List);

const ListWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ListCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  min-width: 250px;
  border-right: 2px solid black;
`;

const Title = styled.div`
  margin-top: 52px;
  font-size: 24px;
  font-weight: 800;
`;
const TabBtn = styled.div`
  font-size: 20px;
  font-weight: ${(props) => (props.isSelected ? "700" : "500")};
  margin-top: 36px;
  cursor: pointer;
`;
