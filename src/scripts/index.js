import '../styles/index.scss';
import 'bootstrap';
import { drawLineChart } from "./line-chart";
import { Cartoonist } from './cartoonist';

drawLineChart();

const cartoonist = new Cartoonist();
cartoonist.draw(x => x^2, 10);
