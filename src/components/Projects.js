import React, { Component } from 'react';
import { connect } from "react-redux";
import "./App.css";
import { loadProjects } from "../actions/projectActions";
import { bindActionCreators } from 'C:/Users/Filipe/AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Project from './Project';
import "./Projects.css";

class Projects extends Component {

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
    if (this.shouldComponentRender())return <div ><CircularProgress  /></div>
    return (
      <div className="projects_container">
        {projects.map(project => (
          <Project key={project._id} project={project} ></Project>
          //<Link to={`/trello/${project._id}`} key={project._id}><Project title={project.title}></Project></Link>          
        ))}
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Projects);