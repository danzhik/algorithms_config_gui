
const algorithms = {
    0: {
        name: "Skull strip",
        requiredImages: [ "T1" ],
        requiredPreviousAlgorithms: []
    },
    1: {
        name: "Bias correction",
        requiredImages: [ "T1" ],
        requiredPreviousAlgorithms: []
    },
    2: {
        name: "Voxel-based morphometry",
        requiredImages: [ "T1" ],
        requiredPreviousAlgorithms: [ 0 ]
    },
    3: {
        name: "Structural segmentation",
        requiredImages: [ "T1" ],
        requiredPreviousAlgorithms: [ 0, 1 ]
    },
    4: {
        name: "Tensor-based morphometry",
        requiredImages: [ "T1" ],
        requiredPreviousAlgorithms: [ 2, 3 ]
    },
    5: {
        name: "Gradient analysis",
        requiredImages: [ "FLAIR" ],
        requiredPreviousAlgorithms: []
    },
    6: {
        name: "Co-registration",
        requiredImages: [ "T1", "FLAIR" ],
        requiredPreviousAlgorithms: [ 3, 5 ]
    },
    7: {
        name: "White-matter hyperintensities",
        requiredImages: ["T1", "FLAIR"],
        requiredPreviousAlgorithms: [ 6 ]
    }
}

export default algorithms;