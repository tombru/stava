import React, {Component} from "react";

class Assignment extends Component {

    componentDidMount() {
        this.nameInput.focus();
    }

    render() {
        const {currentText, imageName, onChange} = this.props;
        return (
            <div className="assignment">
                <img src={imageName} alt={imageName || "n/a"}/>
                <br/>
                <input ref={(input) => {
                    this.nameInput = input;
                }} type="text" onChange={onChange} value={currentText}/>
            </div>
        )
    }

}

export default Assignment;
