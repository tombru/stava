import React from "react";
import "./App.css";
import AssignmentsContainer  from "./AssignmentsContainer";
import { Provider } from "react-redux"
import store from './configureStore'

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <AssignmentsContainer />
            </Provider>
        </div>
    )

}

export default App;
