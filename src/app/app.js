import { Cartoonist } from './cartoonist/cartoonist';

export default class App {

    static main() {

        const cartoonist = new Cartoonist();
        cartoonist.setContext2d('line-chart');
        cartoonist.drawDummyLineChart();
        cartoonist.draw(x => x ^ 2, 10);

    }
} 