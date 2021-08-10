import React from "react";
import styled from "styled-components";

const SearchForm = ({ value, onChange, onSubmit, onReset }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  const handleReset = () => {
    onReset();
  };

  const handlechangeInput = (event) => {
    onChange(event.target.value);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} onReset={handleReset}>
        <input
          type="text"
          placeholder="자신의 이름을 입력하세요"
          autoFocus
          value={value}
          onChange={handlechangeInput}
        />
        <BtnBox>
          {value.length > 0 && (
            <ResetBtn type="reset" className="btn-reset">
              X
            </ResetBtn>
          )}
        </BtnBox>
      </Form>
    </>
  );
};

export default SearchForm;

const Form = styled.form`
  padding-top: 120px;
  display: flex;
  input {
    width: 700px;
    height: 52px;
    font-size: 24px;
    text-indent: 8px;
    :focus {
      outline: none;
    }
    &::placeholder {
      text-indent: 8px;
      font-size: 24px;
    }
  }
`;

const BtnBox = styled.div`
  position: relative;
  z-index: 10;
  left: -5%;
`;

const ResetBtn = styled.button`
  position: absolute;
  color: white;
  font-weight: 900;
  font-size: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: gray;
  opacity: 0.2;
  top: 48%;
  left: 60%;
  transform: translate(-50%, -50%);
`;
