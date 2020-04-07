import { Cartoonist } from './cartoonist/cartoonist';

export default class App {

    static main() {

        const cartoonist = new Cartoonist();
        cartoonist.setContext2d('line-chart');
        cartoonist.draw(x => x * x, 10);

        /*
            TODO: 
            - visualization of the condition of a matrix (using the unit circle)
            - navigation using a bootstrap panel
            - numerically integrate using quadrature formulas, visualize and compare the values
            - solve linear equation systems
            - solve ordinary differential equations
        */

    }
} 