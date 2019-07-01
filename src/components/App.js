import React, { Component } from 'react';
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import "./App.css";
import TrelloActionButton from "./TrelloActionButton";

class App extends Component {
  render() {

    const { lists } = this.props;
    return (
      <div className="App">
        <h2>Hello</h2>
        <div className="lists">
          {lists.map(list => (
            <TrelloList key={list.id} title={list.title} cards={list.cards} />
          ))}
          <TrelloActionButton list />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
