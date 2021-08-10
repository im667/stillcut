import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Pages/Main";
import List from "./Pages/List";
import Nav from "./Components/Nav";
import Search from "./Pages/Search";
import Footer from "./Components/Footer";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Route exact path="/" component={Main} />
        <Route exact path="/list" component={List} />
        <Route exact path="/search" component={Search} />
        <Footer />
      </Router>
    );
  }
}

export default Routes;
