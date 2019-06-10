import React, { Component, Fragment } from "react";
import Navigation from "./_navigation";
import Input from "../containers/input";
import ShowList from "../containers/show_list";
import About from "./about";
import Detail from "../containers/detail";
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../styles/style.css';

const Home = () => {
  return (
    <Fragment>
      <Input />
      <ShowList />
    </Fragment>
  );
}
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      apiResponse: '',
    }
  }
  callApi = () => {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState( {apiResponse: res} ))
      .catch(err => err);
  }

  componentDidMount() {
    this.callApi();
  }

  render() {
    return (
      <div className="react-app">
        <p className="App-intro">{this.state.apiResponse}</p>
        <h1>Messages List</h1>
        <Router>
          <div>
            <Navigation />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact strict path="/:id([a-zA-Z0-9-]+)/view" component={Detail} />
          </div>
        </Router>
      </div>
    );
  }
}
