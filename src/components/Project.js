import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

function Project(props) {
    return (
        <div className="container">
            <Link to={`/trello/${props.project._id}`} className="link">
                <div className="container_root">
                    <div className="title">
                        {props.project.title}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Project;