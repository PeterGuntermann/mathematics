import '../styles/index.scss';
import 'bootstrap';
import { drawLineChart } from "./line-chart";
import { draw } from './cartoonist';

drawLineChart();
draw(x => x^2, 10);