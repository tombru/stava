import React, {Component} from "react";

class Assignment extends Component {

    componentDidMount(){
        this.nameInput.focus();
    }

    render() {
        const {currentText, imageName, onChange} = this.props;
        return (
            <span>
                <img src={imageName} alt={imageName || "n/a"} />
                <br/>
                <input ref={(input) => { this.nameInput = input; }} type="text" onKeyUp={onChange} value={currentText}/>
            </span>
        )
    }

}

// const assignments = ["T-Centralen", "Slussen", "Universitetet", "Skolan", "Västertorp", "Isabell", "Hiss", "Fruängen", "Buss", "Jessy", "Pappa", "Mamma", "Matti", "Sko", "Elefant", "Mälarhöjden", "Liljeholmen", "Tunnelbana", "Prins Onsdag", "Eksätravägen", "Nyponsoppa", "Bil", "Vagn", "Mormor"];
const assignments = ["bill_callahan.jpg", "hiss.jpg", "pizza.jpg", "bamse.jpg", "buss.jpeg","sko.jpg", "pappa.jpeg", "mamma.jpg", "farmor.jpg", "daniel_tiger.jpg", "alfons.jpg", "thomas_tåg.jpg"];

const randomAssignment = () => {
    return assignments[Math.floor(Math.random() * assignments.length)]
};

class Assignments extends Component {
    state = {
        showAssignment: true,
        currentText: "",
        currentAssignment: randomAssignment(),
        previousAssignment: ""
    };

    change(proxy) {
        const {currentText, currentAssignment} = this.state;
        const targetText = currentAssignment.substring(0, currentAssignment.indexOf(".")).replace("_", " ");
        const {key} = proxy;
        if (key === "Backspace") {
            this.setState({
                currentText: currentText.substring(0, currentText.length - 1)
            })
        } else {
            const writtenText = currentText + key;
            const upperCaseTargetText = targetText.toUpperCase();
            const upperCaseWrittenText = writtenText.toUpperCase();
            if (currentText === "") {
                this.setState({
                    previousAssignment: ""
                });
            }
            if (upperCaseTargetText === upperCaseWrittenText) {
                this.setState({
                    currentText: "",
                    currentAssignment: randomAssignment(),
                    previousAssignment: writtenText,
                    showAssignment: false
                });
                setTimeout(function(){
                    this.setState({showAssignment: true});
                }.bind(this), 1000)
            } else if (upperCaseTargetText.startsWith(upperCaseWrittenText)) {
                this.setState({
                    currentText: writtenText
                });
            }
        }


    }

    render() {
        const {currentAssignment, currentText, showAssignment} = this.state;

        return (
            <div className="container">
                {showAssignment && <Assignment
                    currentText={currentText}
                    imageName={currentAssignment}
                    onChange={this.change.bind(this)}
                /> }
                {!showAssignment && <div className="previousAssignment">
                    <h4>{this.state.previousAssignment}</h4>
                </div>}
            </div>
        )
    }
}

export default Assignments;

