import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { withRouter } from "react-router-dom";

function MainContents() {
  const [artwork, setArtWork] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArtWork = async () => {
      try {
        setError(null);
        setArtWork(null);
        setLoading(true);
        const response = await axios.get(`/Data/MainContentsData.json`);
        setArtWork(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    getArtWork();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했다데스</div>;
  if (!artwork) return null;

  return (
    <>
      <ContentsUl>
        {artwork.map((art) => (
          <ContentLi key={art.id}>
            <img src={art.img} alt="artworks"></img>
            <Caption>
              <span>{art.name}</span>
              <span>{art.size}</span>
              <span>{art.year}</span>
            </Caption>
          </ContentLi>
        ))}
      </ContentsUl>
    </>
  );
}

export default withRouter(MainContents);

const ContentsUl = styled.div`
  display: inline-block;
  width: 100%;
  margin-left: 40px;
`;

const ContentLi = styled.div`
  display: inline-block;
  width: 600px;
  padding: 8px;
  overflow: hidden;
  img {
    width: 600px;
    height: 600px;
    max-height: 600px;
    transition: 0.2s;
    overflow: hidden;
    object-fit: cover;
    &:hover {
      transform: scale(1.15);
    }
  }
`;

const Caption = styled.div`
  display: flex;
  justify-content: space-between;
`;
