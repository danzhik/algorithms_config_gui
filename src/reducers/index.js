import {
    ADD_IMAGE_TYPE,
    ADD_ALGORITHM,
    CREATE_CONFIGURATION,
    RESET_SELECTIONS_AND_CONFIGURATION,
    REMOVE_IMAGE_TYPE,
    REMOVE_ALGORITHM
} from "../actions/action_types";

const initialState = {
    selectedImageTypes: [],
    selectedAlgorithms: [],
    configuration: {}
};

const appReducer = (state = initialState, action) => {
    if (action.type === ADD_IMAGE_TYPE){

        return {...state,
            selectedImageTypes: [
                ...state.selectedImageTypes,
                action.payload
            ]
        }
    }

    if (action.type === ADD_ALGORITHM){
        return {...state,
            selectedAlgorithms: [
                ...state.selectedAlgorithms,
                action.payload
            ]
        }
    }

    if (action.type === REMOVE_IMAGE_TYPE){
        const { selectedImageTypes } = state;
        selectedImageTypes.splice(selectedImageTypes.indexOf( action.payload), 1);
        return {...state,
            selectedImageTypes: selectedImageTypes
        }
    }

    if (action.type === REMOVE_ALGORITHM){
        const { selectedAlgorithms } = state;
        selectedAlgorithms.splice(selectedAlgorithms.indexOf(action.payload), 1);
        return {...state,
            selectedAlgorithms: selectedAlgorithms
        }
    }

    if (action.type === CREATE_CONFIGURATION){
        return {...state,
            configuration: {
                images: state.selectedImageTypes,
                algorithms: state.selectedAlgorithms
            }
        }
    }

    if (action.type === RESET_SELECTIONS_AND_CONFIGURATION){
        return initialState;
    }

    return state;
};

export default appReducer;