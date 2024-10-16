// Wait until the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Bar Chart: Task Completion
    const ctxBar = document.getElementById('barChart').getContext('2d');
    const barChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'],
            datasets: [{
                label: 'Efficiency',
                data: [60, 99, 75, 80, 90],
                backgroundColor: '#42a5f5',
                borderColor: '#1e88e5',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Line Chart: Monthly Performance
    const ctxLine = document.getElementById('lineChart').getContext('2d');
    const lineChart = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Performance Score',
                data: [65, 59, 80, 81, 56, 55],
                fill: false,
                borderColor: '#66bb6a',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Pie Chart: Skill Distribution
    const ctxPie = document.getElementById('pieChart').getContext('2d');
    const pieChart = new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: ['JavaScript', 'Python', 'React', 'Node.js', 'SQL'],
            datasets: [{
                label: 'Skill Set',
                data: [25, 20, 30, 15, 10],
                backgroundColor: [
                    '#ff6384',
                    '#36a2eb',
                    '#ffcd56',
                    '#4bc0c0',
                    '#9966ff'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                }
            }
        }
    });
});

// // Example of updating chart data dynamically (e.g., via an API)
// fetch('/api/performance-data')
//     .then(response => response.json())
//     .then(data => {
//         barChart.data.datasets[0].data = data.completedTasks;
//         lineChart.data.datasets[0].data = data.monthlyPerformance;
//         pieChart.data.datasets[0].data = data.skillDistribution;
        
//         // Update the charts after data is loaded
//         barChart.update();
//         lineChart.update();
//         pieChart.update();
//     });
