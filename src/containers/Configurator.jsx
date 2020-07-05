import React, { useCallback } from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import imageTypes from "../image_types/index";
import algorithms from "../algorithms";
import "./Configurator.css";
import {Button} from "react-bootstrap";
import {ADD_ALGORITHM, ADD_IMAGE_TYPE, REMOVE_ALGORITHM, REMOVE_IMAGE_TYPE} from "../actions/action_types";

const Configurator = () => {

    const mapState = useCallback(
        state => ({
            selectedImageTypes: state.selectedImageTypes,
            selectedAlgorithms: state.selectedAlgorithms
        }), []
    );

    const isAlgorithmDisabled = (algorithm) => {

        for (let requiredImageType of algorithm.requiredImages) {
            if (selectedImageTypes.indexOf(requiredImageType) === -1) {
                if (selectedAlgorithms.indexOf(algorithm) !== -1) {
                    removeAlgorithm(algorithm);
                }
                return true;
            }
        }

        if (!algorithm.requiredPreviousAlgorithms.length) {
            return;
        }

        for (let requiredPreviousAlgorithm of algorithm.requiredPreviousAlgorithms) {
            if (selectedAlgorithms.indexOf(algorithms[requiredPreviousAlgorithm]) === -1) {
                if (selectedAlgorithms.indexOf(algorithm) !== -1) {
                    removeAlgorithm(algorithm);
                }
                return true;
            }
            isAlgorithmDisabled(algorithms[requiredPreviousAlgorithm]);
        }

        return false;
    }

    const { selectedImageTypes,  selectedAlgorithms} = useMappedState(mapState);

    const dispatch = useDispatch();

    const toggleImageSelection = useCallback(
        (imageType) => {
            if (selectedImageTypes.indexOf(imageType) === -1){
                dispatch ({type: ADD_IMAGE_TYPE, payload: imageType})
            } else {
                dispatch ({type: REMOVE_IMAGE_TYPE, payload: imageType})
            }
        }, [dispatch]
    );

    const removeAlgorithm = useCallback(
        (algorithm) => {
            dispatch ({type: REMOVE_ALGORITHM, payload: algorithm})
        }, [dispatch]
    );

    const addAlgorithm = useCallback(
        (algorithm) => {
            dispatch ({type: ADD_ALGORITHM, payload: algorithm})
        }, [dispatch]
    );

    const toggleAlgorithmSelection = algorithm => {
        if (selectedAlgorithms.indexOf(algorithm) === -1){
            addAlgorithm(algorithm);
        } else {
            removeAlgorithm(algorithm);
        }
    };

    const imageTypesSelector = imageTypes.map(imageType =>
        <div className="form-check d-inline-block m-4">
            <input type={"checkbox"} className={"form-check-input"} checked={selectedImageTypes.indexOf(imageType) !== -1}
                   id={imageType} onChange={() => toggleImageSelection(imageType)} />
            <label className="form-check-label" htmlFor={imageType}>{ imageType }</label>
        </div>
    );

    const algorithmsSelector = Object.entries(algorithms).map(([index, algorithm]) =>
        <div className="form-check d-inline-block m-4">
            <input type={"checkbox"} className={"form-check-input"} checked={selectedAlgorithms.indexOf(algorithm) !== -1}
                   id={`${index}_checkbox`} disabled={isAlgorithmDisabled(algorithm)} onChange={() => toggleAlgorithmSelection(algorithm)}/>
            <label className="form-check-label" htmlFor={`${index}_checkbox`}>{ algorithm.name }</label>
        </div>
    );

    return (
        <div className={"configurator-content"}>
            <h3 className={"image-types-header h3"}>1. Select image types which will be used in processing</h3>
            <form>
                { imageTypesSelector }
            </form>
            <h3 className={"algorithms-header h3"}>2. Select algorithms to perform on images</h3>
            <form className={"algorithms-form"}>
                { algorithmsSelector }
            </form>
        </div>
    );

}

export default Configurator;