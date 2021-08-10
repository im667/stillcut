import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

function Contents() {
  const [contents, setContents] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getContents = async () => {
      try {
        setError(null);
        setContents(null);
        setLoading(true);
        const response = await axios.get(`/Data/ContentsData.json`);
        setContents(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    getContents();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했다데스</div>;
  if (!contents) return null;

  return (
    <ListUl>
      {contents.map((content) => (
        <ListLi>
          <img src={content.img} alt="contents" />
        </ListLi>
      ))}
    </ListUl>
  );
}

export default Contents;

const ListUl = styled.div`
  display: flex;
  flex-wrap: wrap;
  &:nth-child(3n) {
    flex-basis: 0;
  }
  justify-content: center;
`;

const ListLi = styled.div`
  display: flex;
  width: 500px;
  max-width: 500px;
  max-height: 500px;
  margin: 13.5px;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 500px;
    max-width: 100%;
    height: 500px;
    margin-bottom: 8px;
    border-radius: 10px;
    object-fit: cover;
    cursor: pointer;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    &:hover {
      -webkit-transform: scale(1.05);
      transform: scale(1.05);
    }
  }
`;
