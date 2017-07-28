import React, { Component } from "react";
import { speakSwedish } from "./speak"

class Assignment extends Component {

    componentDidMount() {
        this.nameInput.focus();
        const { question }  = this.props;
        speakSwedish(question);
    }

    render() {
        const { currentText, question, link, onChange } = this.props;
        return (
            <div className="assignment">
                <img src={link} alt={question || "n/a"}/>
                <br/>
                <input ref={(input) => {
                    this.nameInput = input;
                }} type="text" onChange={onChange} value={currentText}/>
            </div>
        )
    }

}

export default Assignment;
