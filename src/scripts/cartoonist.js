/// Draws graphs of mathematical functions in the interval [0,1)
export const draw = (functionToDraw, numPoints) => {
    const interval = [];
    for (let i = 0; i < numPoints; ++i) {
        interval.push(i / (numPoints - 1));
    }
    console.log(interval);
};