import React, { Component } from 'react';
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import { loadLists } from "../actions/listsActions";
import TrelloActionButton from "./TrelloActionButton";
import { DragDropContext } from "react-beautiful-dnd";
import { bindActionCreators } from 'C:/Users/Filipe/AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import "./Trello.css";

class Trello extends Component {

    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
        const { loadListsX } = this.props;
        const { match } = this.props;

        loadListsX(match.params.id);
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

        if (this.shouldComponentRender()) return <div className="wait"><CircularProgress/></div>
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="Trello">
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

export default connect(mapStateToProps, mapDispatchToProps)(Trello);
