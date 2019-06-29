import React, { Component } from 'react';
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  render() {

    const { lists } = this.props;
    return (
      <div className="App">
        <h2>Hello</h2>
        <div className="lists">
          {lists.map(list => <TrelloList title={list.title} cards={list.cards} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
