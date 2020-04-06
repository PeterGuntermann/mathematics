import '../styles/index.scss';
import 'bootstrap';
import { Cartoonist } from './cartoonist';

const cartoonist = new Cartoonist();
cartoonist.setContext2d('line-chart');
cartoonist.drawDummyLineChart();
cartoonist.draw(x => x^2, 10);
