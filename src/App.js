import React from "react";
import "./App.css";
import AssignmentContainer  from "./AssignmentContainer";
import { Provider } from "react-redux"
import store from './configureStore'

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <AssignmentContainer />
            </Provider>
        </div>
    )

}

export default App;
