import { Interval } from '../interval';
import { lineChartDummyOptions } from './dummy-charts';
import Chart from 'chart.js';

/// Draws graphs of mathematical functions in the interval [0,1)
export class Cartoonist {

    setContext2d(elementId) {
        this.ctx = document.getElementById(elementId).getContext('2d');
    }

    draw(f, numPoints) {
        const xAxis = new Interval(0, 1).asArray(numPoints);
        const yAxis = xAxis.map(x => f(x));
        console.log(xAxis);
        console.log(yAxis);
        const _ = new Chart(this.ctx, {
            type: "line",
            data: {
                labels: xAxis,
                datasets: [
                    { data: yAxis, lineTension: 0 }
                ]
            },
            options: {}
        });
    };
    
    // TODO: draw multiple graphs into the same canvas

}

