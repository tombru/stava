import React, {Component} from "react";

class Assignment extends Component {

    componentDidMount(){
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
                }} type="text" onKeyUp={onChange} value={currentText}/>
            </div>
        )
    }

}

// const assignments = ["T-Centralen", "Slussen", "Universitetet", "Skolan", "Västertorp", "Isabell", "Hiss", "Fruängen", "Buss", "Jessy", "Pappa", "Mamma", "Matti", "Sko", "Elefant", "Mälarhöjden", "Liljeholmen", "Tunnelbana", "Prins Onsdag", "Eksätravägen", "Nyponsoppa", "Bil", "Vagn", "Mormor"];
const assignments = ["spöke.jpg","badhus.jpg","borrmaskin.jpg","choklad.jpg","cykelvagn.jpg","dammsugare.jpg","dator.jpg","gitarr.jpeg","lekplats.jpg","makaroner.jpg","mannagrynsgröt.jpg","nudlar.jpg","ostbågar.jpg","studsmatta.png","tandborste.jpg","tandkräm.jpg","ugnspannkaka.jpg","yoghurt.jpg","sol.png", "glasögon.png", "dinosaurie.jpg", "cykel.jpg", "fiskespö.jpg", "lastbil.jpg", "flygplan.jpg", "giraff.jpg", "häst.jpg", "percy.png","bill_callahan.jpg", "hiss.jpg", "pizza.jpg", "bamse.jpg", "buss.jpeg","sko.jpg", "pappa.jpeg", "mamma.jpg", "farmor.jpg", "daniel_tiger.jpg", "alfons.jpg", "thomas_tåg.jpg"];


class Assignments extends Component {
    state = {
        assignments: assignments,
        nrOfRuns: 20,
        showAssignment: true,
        currentText: "",
        currentAssignment: Assignments.pickRandom(assignments),
        previousAssignment: ""
    };

    static pickRandom(a)  {
        return a[Math.floor(Math.random() * a.length)]
    };

    change(proxy) {
        const {currentText, currentAssignment, assignments} = this.state;
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
                const undoneAssignments = assignments.filter(assignment => assignment !== currentAssignment);
                this.setState({
                    assignments: undoneAssignments,
                    currentText: "",
                    currentAssignment: Assignments.pickRandom(undoneAssignments),
                    previousAssignment: writtenText,
                    showAssignment: false,
                    nrOfRuns: this.state.nrOfRuns-1,
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


    }

    render() {
        const {currentAssignment, currentText, showAssignment, nrOfRuns, previousAssignment} = this.state;

        return (
            <div className="container">
                {showAssignment && nrOfRuns !== 0 && <Assignment
                    currentText={currentText}
                    imageName={currentAssignment}
                    onChange={this.change.bind(this)}
                /> }
                {!showAssignment && <div className="previousAssignment">
                    <h1>{previousAssignment}</h1>
                </div>}
                {showAssignment && nrOfRuns !== 0 && <h4>{nrOfRuns}</h4>}
                {showAssignment && nrOfRuns === 0 && <h1>Slut!</h1>}
            </div>
        )
    }
}

export default Assignments;
