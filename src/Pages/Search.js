import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import SearchForm from "../Components/Search/SearchForm";
import SearchResult from "../Components/Search/SearchResult";
import store from "../Components/Search/Store";
import Tabs, { TabType } from "../Components/Search/Tabs";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchKeyword: "",
      searchResult: [],
      submitted: false,
      selectedTab: TabType.KEYWORD,
    };
  }
  handleChangeInput(searchKeyword) {
    if (searchKeyword.length <= 0) {
      this.handleReset();
    }

    this.setState({ searchKeyword });
  }

  search(searchKeyword) {
    const searchResult = store.search(searchKeyword);
    this.setState({
      searchResult,
      submitted: true,
    });
  }

  handleReset() {
    console.log("Todo: handleReset");
    this.setState({ searchKeyword: "" });
  }

  render() {
    const { searchKeyword, submitted, searchResult, selectedTab } = this.state;

    return (
      <>
        <SearchWrap>
          <div className="container">
            <SearchForm
              value={searchKeyword}
              onChange={(value) => this.handleChangeInput(value)}
              onSubmit={() => this.search(searchKeyword)}
              onReset={() => this.handleReset()}
            />
            <Content>
              {submitted ? (
                <SearchResult data={searchResult} />
              ) : (
                <>
                  <Tabs
                    selectedTab={selectedTab}
                    onChange={(selectedTab) => this.setState({ selectedTab })}
                  />
                  {selectedTab === TabType.KEYWORD && <>Todo:추천검색어목록</>}
                  {selectedTab === TabType.HISTORY && <>Todo:최근검색어목록</>}
                </>
              )}
            </Content>
          </div>
        </SearchWrap>
      </>
    );
  }
}

export default withRouter(Search);

const SearchWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  padding-top: 16px;
  div {
    height: 300px;
    background-color: #f8f5f6;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: #ff0078;
  }
`;
