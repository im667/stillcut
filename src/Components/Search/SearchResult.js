import React from "react";
import styled from "styled-components";

const SearchResult = ({ data = [] }) => {
  if (data.length <= 0) {
    return <EmptyBox>검색 결과가 없습니다.</EmptyBox>;
  }
  return (
    <ResultUl>
      {data.map(({ id, imageUrl, name }) => (
        <Li key={id}>
          <img src={imageUrl} alt="klz" />
          <p>{name}</p>
        </Li>
      ))}
    </ResultUl>
  );
};

export default SearchResult;

const EmptyBox = styled.div`
  display: flex;
  width: 100%;
`;

const ResultUl = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  img {
    width: 150px;
    height: 150px;
    margin-bottom: 16px;
    border-radius: 10px;
    object-fit: cover;
    cursor: pointer;
    margin-right: 16px;
  }
  p {
    font-size: 24px;
  }
`;
