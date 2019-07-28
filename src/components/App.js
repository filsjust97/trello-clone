import React, { Component } from 'react';
//import TrelloList from "./TrelloList";
import Trello from "./Trello";
import { connect } from "react-redux";
import "./App.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { loadProjects } from "../actions/projectActions";
//import TrelloActionButton from "./TrelloActionButton";
//import { DragDropContext } from "react-beautiful-dnd";
import { bindActionCreators } from 'C:/Users/Filipe/AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux';
import { Link } from 'react-router-dom';

/* class App extends Component {

  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
    const { loadListsX } = this.props;
    loadListsX();
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (pending === false) return false;
    // more tests
    return true;
  }

  onDragEnd = () => {
    // TODO: reordering logic
  }

  render() {
    const { lists } = this.props;
    if(this.shouldComponentRender()) return <div>It's fucked</div>
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          <h2>Hello</h2>
          <div className="lists">
            {lists.map(list => (
              <TrelloList listID={list._id} key={list._id} title={list.title} cards={list.cards} />
            ))}
            <TrelloActionButton list />
          </div>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists.list,
  pending: state.lists.pending
})

const mapDispatchToProps = dispatch => bindActionCreators({
  loadListsX: loadLists,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App); */

class App extends Component {

  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
    const { loadProjectsX } = this.props;

    loadProjectsX();
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (pending === false) return false;
    // more tests
    return true;
  }

  render() {
    const { projects } = this.props;
    console.log(projects);
    if (this.shouldComponentRender()) return <div>It's fucked</div>
    return (
      <BrowserRouter>
        <div>
          {projects.map(project => (
            <Link to={`/trello/${project._id}`}>{project.title}</Link>            
          ))}
        </div>
        <Switch>
          <Route path='/trello/:id' component={Trello} />
        </Switch>
      </BrowserRouter>
    );
  }
}

//export default App;
const mapStateToProps = state => ({
  projects: state.projects.project,
  pending: state.projects.pending
})

const mapDispatchToProps = dispatch => bindActionCreators({
  loadProjectsX: loadProjects,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
