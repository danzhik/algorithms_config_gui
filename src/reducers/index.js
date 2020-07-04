import { ADD_FILE_TYPE, ADD_ALGORITHM, CREATE_CONFIGURATION, RESET_SELECTIONS_AND_CONFIGURATION } from "../actions/action_types";

const initialState = {
    selectedFileTypes: [],
    selectedAlgorithms: [],
    configuration: {}
};

const appReducer = (state = initialState, action) => {
    if (action.type === ADD_FILE_TYPE){
        const { selectedFileTypes } = state;
        selectedFileTypes.push(action.payload);
        return {...state,
            selectedFileTypes: selectedFileTypes
        }
    }

    if (action.type === ADD_ALGORITHM){
        const { selectedAlgorithms } = state;
        selectedAlgorithms.push(action.payload);
        return {...state,
            selectedAlgorithms: selectedAlgorithms
        }
    }

    if (action.type === CREATE_CONFIGURATION){
        return {...state,
            configuration: action.payload
        }
    }

    if (action.type === RESET_SELECTIONS_AND_CONFIGURATION){
        return initialState;
    }

    return state;
};

export default appReducer;