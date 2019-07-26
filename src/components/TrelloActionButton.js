import React from "react";
import Icon from "@material-ui/core/Icon";
import Textarea from "react-textarea-autosize";
import Card from "@material-ui/core/Card";
import "./TrelloActionButton.css";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { postCard } from "../actions/cardsActions";
import { postList } from "../actions/listsActions";


class TrelloActionButton extends React.Component {

    state = {
        formOpen: false,
        text: ""
    };

    openForm = () => {
        this.setState({
            formOpen: true
        });
    };

    closeForm = (e) => {
        this.setState({
            formOpen: false
        });
    };

    handleInputChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleAddList = () => {
        const { text } = this.state;

        if (text) {
            this.setState({
                text: ""
            })
            this.props.postList(text);

        }

        return;
    }

    handleAddCard = () => {
        const { listID } = this.props;
        console.log(this.props);
        const { text } = this.state;

        if(text) {
            this.setState({
                text: ""
            })
            //dispatch(addCard(listID, text))
            this.props.postCard(listID, text);
        }
    }

    renderAddButton = () => {
        const { list } = this.props;

        const buttonText = list ? "Add another list" : "Add another card"
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

        return (
            <div className="addButton" onClick={this.openForm} style={{ opacity: buttonTextOpacity, color: buttonTextColor, backgroundColor: buttonTextBackground }}>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    };

    renderForm = () => {

        const { list } = this.props;

        const placeholder = list ? "Enter list title..." : "Enter a title for this card...";

        const buttonTitle = list ? "Add List" : "Add Card";

        return <div>
            <Card className="card" >
                <Textarea className="textarea"
                    placeholder={placeholder}
                    autoFocus
                    onBlur={this.closeForm}
                    value={this.state.text}
                    onChange={this.handleInputChange}
                />
            </Card>
            <div className="cardControl">
                <Button
                    onMouseDown={list ? this.handleAddList : this.handleAddCard}
                    variant="contained"
                    style={{ color: "white", backgroundColor: "#5aac44" }}
                >
                    {buttonTitle} {" "}
                </Button>
                <Icon className="renderFormIcon">close</Icon>
            </div>
        </div>;
    };

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    };
}
const mapDispatchToProps = { postCard, postList };  
export default connect(null, mapDispatchToProps)(TrelloActionButton);
