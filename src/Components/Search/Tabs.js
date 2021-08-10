import React, { useState } from "react";
import styled from "styled-components";

export const TabType = {
  KEYWORD: "KEYWORD",
  HISTORY: "HISTORY",
};

const TabLabel = {
  [TabType.KEYWORD]: "추천검색어",
  [TabType.HISTORY]: "최근검색어",
};

const Tabs = ({ onChange }) => {
  const [isSelected, setIsSelected] = useState("추천검색어");

  const handleSelect = (e) => {
    setIsSelected(e.target.textContent);
  };

  return (
    <>
      <TabsUl>
        {Object.values(TabType).map((tabType) => (
          <li
            key={tabType}
            isSelected={isSelected}
            onClick={(e) => onChange(tabType)}
          >
            <TabsSon>{TabLabel[tabType]}</TabsSon>
          </li>
        ))}
      </TabsUl>
    </>
  );
};

export default Tabs;

const TabsUl = styled.ul`
  display: flex;
  width: 100%;
  height: 200px;

  li {
    display: flex;
    flex-direction: column;
    margin: 16px 16px 0 0;
    height: 30px;
  }
`;

const TabsSon = styled.div``;
