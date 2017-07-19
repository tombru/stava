import React, { Component } from "react";
// import { speakSwedish } from "./speak"

class Assignment extends Component {

    componentDidMount() {
        this.nameInput.focus();
        // speakSwedish("Matti, vad är det för någonting?")
    }

    render() {
        const { currentText, filename, onChange } = this.props;
        return (
            <div className="assignment">
                <img src={filename} alt={filename || "n/a"}/>
                <br/>
                <input ref={(input) => {
                    this.nameInput = input;
                }} type="text" onChange={onChange} value={currentText}/>
            </div>
        )
    }

}

export default Assignment;
