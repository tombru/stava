import React, {Component} from "react";

const assignments = ["spöke.jpg", "badhus.jpg", "borrmaskin.jpg", "choklad.jpg", "cykelvagn.jpg", "dammsugare.jpg", "dator.jpg", "gitarr.jpeg", "lekplats.jpg", "makaroner.jpg", "mannagrynsgröt.jpg", "nudlar.jpg", "ostbågar.jpg", "studsmatta.png", "tandborste.jpg", "tandkräm.jpg", "ugnspannkaka.jpg", "yoghurt.jpg", "sol.png", "glasögon.png", "dinosaurie.jpg", "cykel.jpg", "fiskespö.jpg", "lastbil.jpg", "flygplan.jpg", "giraff.jpg", "häst.jpg", "percy.png", "bill_callahan.jpg", "hiss.jpg", "pizza.jpg", "bamse.jpg", "buss.jpeg", "sko.jpg", "pappa.jpeg", "mamma.jpg", "farmor.jpg", "daniel_tiger.jpg", "alfons.jpg", "thomas_tåg.jpg"];

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


function Assignments({ currentAssignment, currentText, showAssignment, nrOfRunsLeft, previousAssignment, onChange }) {
    return (
        <div className="container">
            {showAssignment &&
                <span>
                    {nrOfRunsLeft !== 0 &&
                            <span>
                                <Assignment
                                    currentText={currentText}
                                    imageName={currentAssignment}
                                    onChange={onChange}
                                />
                                <h4>{nrOfRunsLeft}</h4>
                            </span>}
                    {nrOfRunsLeft === 0 && <h1>Slut!</h1>}
                </span>
            }
            {!showAssignment &&
                <div className="previousAssignment">
                    <h1>{previousAssignment}</h1>
                </div>
            }
        </div>
    )

}

class AssignmentsContainer extends Component {

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this)
    }

    state = {
        assignments: assignments,
        nrOfRunsLeft: 20,
        showAssignment: true,
        currentText: "",
        currentAssignment: AssignmentsContainer.pickRandom(assignments),
        previousAssignment: ""
    };

    static pickRandom(a) {
        return a[Math.floor(Math.random() * a.length)]
    };

    static targetText(currentAssignment) {
        return currentAssignment.substring(0, currentAssignment.indexOf(".")).replace("_", " ");
    }

    onInputChange(event) {
        const writtenText = event.target.value;
        this.handleWrittenText(writtenText);
    }

    handleWrittenText(writtenText) {
        const {currentAssignment, assignments, nrOfRunsLeft} = this.state;
        const targetText = AssignmentsContainer.targetText(currentAssignment);
        const upperCaseTargetText = targetText.toUpperCase();
        const upperCaseWrittenText = writtenText.toUpperCase();
        if (upperCaseTargetText === upperCaseWrittenText) {
            const undoneAssignments = assignments.filter(assignment => assignment !== currentAssignment);
            this.setState({
                assignments: undoneAssignments,
                currentText: "",
                currentAssignment: AssignmentsContainer.pickRandom(undoneAssignments),
                previousAssignment: writtenText,
                showAssignment: false,
                nrOfRunsLeft: nrOfRunsLeft - 1,
            });
            setTimeout(function () {
                this.setState({showAssignment: true});
            }.bind(this), 2000)
        } else if (upperCaseTargetText.startsWith(upperCaseWrittenText)) {
            this.setState({
                currentText: writtenText
            });
        }
    }

    render() {
        return (
            <Assignments
                {...this.state}
                onChange={this.onInputChange}
            />
        )
    }
}

export default AssignmentsContainer;
