import React, {useCallback} from 'react';
import './App.css';
import Configurator from "./containers/Configurator";
import {Button, Collapse} from "react-bootstrap";
import {useDispatch, useMappedState} from "redux-react-hook";
import {CREATE_CONFIGURATION, RESET_SELECTIONS_AND_CONFIGURATION} from "./actions/action_types";

const App = () => {

    const mapState = useCallback(
        state => ({
            configuration: state.configuration
        }), []
    );

    const { configuration } = useMappedState(mapState);

    const dispatch = useDispatch();

    const generateConfiguration = useCallback(
        () => {
            dispatch({type: CREATE_CONFIGURATION});
        }, [dispatch]
    );

    const dropConfiguration = useCallback(
        () => {
            dispatch({type: RESET_SELECTIONS_AND_CONFIGURATION});
        }, [dispatch]
    );

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Use this interface to compose the configuration for you image processing!
                </p>
            </header>
            <Configurator/>

            <Button className={"mr-3"} onClick={generateConfiguration}> Generate configuration </Button>
            <Button onClick={dropConfiguration}> Reset selections </Button>

        </div>
    );
};

export default App;
