import React from "react";
import Assignment from "./Assignment"

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

export default Assignments;
