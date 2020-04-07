import { Interval } from '../interval';
import { lineChartDummyOptions } from './dummy-charts';
import Chart from 'chart.js';

/// Draws graphs of mathematical functions in the interval [0,1)
export class Cartoonist {

    setContext2d(elementId) {
        this.ctx = document.getElementById(elementId).getContext('2d');
    }

    drawDummyLineChart() {
        const chart = new Chart(this.ctx, lineChartDummyOptions);
    }

    draw(functionToDraw, numPoints) {
        const interval = new Interval(0, 1).asArray(numPoints);
        console.log(interval);
    };

    // TODO: calculate more general intervals
    // TODO: let the draw() function actually "draw" something with ChartJS
    // TODO: draw multiple graphs into the same canvas

}

