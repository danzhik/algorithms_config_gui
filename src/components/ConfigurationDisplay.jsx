import React from "react";
import algorithms from "../algorithms";


const ConfigurationDisplay = ({configuration}) => {

    const compare = (a, b) => {

        const firstAlgorithmKey = Object.keys(algorithms).find(key => algorithms[key] === a);
        const secondAlgorithmKey = Object.keys(algorithms).find(key => algorithms[key] === b);

        if (firstAlgorithmKey > secondAlgorithmKey) {
            return 1;
        }
        if (firstAlgorithmKey < secondAlgorithmKey) {
            return -1;
        }

        return 0;
    }

    let imagesString = undefined;

    if (configuration.images && configuration.images.length) {
        imagesString = configuration.images.join(",");
    }

    let algorithmsString = undefined;

    if (configuration.algorithms && configuration.algorithms.length) {
        algorithmsString = configuration.algorithms.sort(compare)
            .map(algorithm => algorithm.name)
            .join(",");
    }

    const show = imagesString || algorithmsString;

    return (
        <div className={"mt-5"}>
            {show && <h3>Generated Configuration</h3>}
            <code className={ "text-left" }>
                { imagesString &&
                    `Images: ${imagesString}`
                }
                <br/>
                { algorithmsString &&
                    `Algorithms: ${algorithmsString}`
                }
            </code>
        </div>
    );

};

export default ConfigurationDisplay;