import Chart from 'chart.js';
import { lineChartDummyOptions } from './dummy-charts';

/// Draws graphs of mathematical functions in the interval [0,1)
export class Cartoonist {

    setContext2d(elementId) {
        this.ctx = document.getElementById(elementId).getContext('2d');
    }

    drawDummyLineChart() {
        const chart = new Chart(this.ctx, lineChartDummyOptions);
    }

    draw(functionToDraw, numPoints) {
        const interval = [];
        for (let i = 0; i < numPoints; ++i) {
            interval.push(i / (numPoints - 1));
        }
        console.log(interval);
    };

    // TODO: extract a class Interval
    // TODO: calculate more general intervals
    // TODO: let the draw() function actually "draw" something with ChartJS
    // TODO: draw multiple graphs into the same canvas

}