import Chart from 'chart.js';

export const drawLineChart = () => {
    const ctx = document.getElementById('line-chart').getContext('2d');
    const dummyData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', '', ''],
        datasets: [
            {
                data: [0, 10, 5, 2, 20, 30, 45, 4, 15],
                lineTension: 0
            },
            {
                data: [7, 12, 6, 3, 12, 6, 1, 5, 4],
                lineTension: 0
            }]
    };
    const chart = new Chart(ctx, {
        type: 'line',
        data: dummyData,
        options: {}
    });
};