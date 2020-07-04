import React, { useCallback } from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import imageTypes from "../image_types/index";
import algorithms from "../algorithms";
import "./Configurator.css";
import {Button} from "react-bootstrap";

const Configurator = () => {

    const mapState = useCallback(
        state => ({
            selectedImageTypes: state.selectedImageTypes,
            selectedAlgorithms: state.selectedAlgorithms
        }), []
    );

    const { selectedImageTypes,  selectedAlgorithms} = useMappedState(mapState);

    const imageTypesSelector = imageTypes.map(imageType =>
        <div className="form-check d-inline-block m-4">
            <input type={"checkbox"} className={"form-check-input"} id={`${imageType}_checkbox`}/>
            <label className="form-check-label" htmlFor={`${imageType}_checkbox`}>{ imageType }</label>
        </div>
    );

    const algorithmsSelector = Object.values(algorithms).map(algorithm =>
        <div className="form-check d-inline-block m-4">
            <input type={"checkbox"} className={"form-check-input"} id={`${algorithm.name}_checkbox`}/>
            <label className="form-check-label" htmlFor={`${algorithm.name}_checkbox`}>{ algorithm.name }</label>
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
            <Button> Generate configuration </Button>
        </div>
    );

}

export default Configurator;