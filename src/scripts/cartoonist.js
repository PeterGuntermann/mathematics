/// Draws graphs of mathematical functions in the interval [0,1)
export class Cartoonist {

    draw(functionToDraw, numPoints) {
        const interval = [];
        for (let i = 0; i < numPoints; ++i) {
            interval.push(i / (numPoints - 1));
        }
        console.log(interval);
    };

    foo() {
        console.log("foo");
    }
    
}