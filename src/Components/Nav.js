import React, { useState } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { NavList } from "./NavList";

function Nav() {
  const [isSelected, setIsSelected] = useState("HOME");

  const handleSelect = (e) => {
    setIsSelected(e.target.textContent);
  };

  return (
    <>
      <NavWrap>
        <List>
          {NavList.map((list) => {
            return (
              <NavLink
                to={list.path}
                key={list.id}
                isSelected={list.content === isSelected}
                onClick={(e) => {
                  handleSelect(e);
                }}
              >
                {list.content}
              </NavLink>
            );
          })}
        </List>

        <Logo>
          <Link to="/">
            <img src="/images/logo.png" alt="logo" />
          </Link>
        </Logo>
        <NavRightBox>
          <Cart>
            <img src="/images/cartIcon.png" alt="logo" />
            <span>CART</span>
          </Cart>
          <Search
            isSelected={isSelected}
            onClick={(e) => {
              handleSelect(e);
            }}
          >
            <Link to={"/search"}>
              <img src="/images/searchIcon.png" alt="logo" />
            </Link>
            <Link to={"/search"}>
              <span>SEARCH</span>
            </Link>
          </Search>
        </NavRightBox>
      </NavWrap>
    </>
  );
}

export default withRouter(Nav);

const NavWrap = styled.div`
  display: flex;
  padding-top: 16px;
  flex-direction: row;
  width: 100%;
  height: 120px;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  img {
    width: 250px;
  }
`;

const List = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 15%;
  font-size: 32px;
`;

const NavRightBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 15%;
`;

const Cart = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-content: center;
  padding-right: 32px;
  font-size: 16px;

  img {
    margin-bottom: 8px;
    width: 36px;
    height: 36px;
  }
  span {
    margin-top: 4px;
    padding-left: 4px;
    min-width: 20px;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-content: center;
  font-size: 16px;
  text-decoration: none;
  a {
    display: flex;
  }
  img {
    margin-bottom: 8px;
    width: 36px;
    height: 36px;
  }

  span {
    color: black;
    margin-top: 4px;
    padding-left: 4px;
    text-decoration: none;
  }
`;

const NavLink = styled(Link)`
  display: inline-block;
  padding-right: 32px;
  text-decoration: none;
  font-weight: 800;
  color: ${(props) => (props.isSelected ? "pink" : "black")};
`;
