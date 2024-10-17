document.addEventListener("DOMContentLoaded", function() {
    const ctxLine = document.getElementById('rating').getContext('2d');
    const ctxStackedBar = document.getElementById('rating-breakdown').getContext('2d');
    const ctxPie = document.getElementById('sentimentPieChart').getContext('2d');

    // Line Chart - Average Rating Over Time
    new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [
                { label: 'Collaboration', data: [3.5, 4.0, 3.8, 4.2, 4.0], borderColor: '#36A2EB', fill: false },
                { label: 'Leadership', data: [4.0, 3.5, 4.5, 4.0, 4.3], borderColor: '#FF6384', fill: false },
                { label: 'Innovation', data: [3.2, 3.8, 3.5, 3.9, 4.1], borderColor: '#FFCE56', fill: false },
                { label: 'Teamwork', data: [4.5, 4.3, 4.6, 4.7, 4.8], borderColor: '#4BC0C0', fill: false }
            ]
        },
        options: {
            scales: { x: { title: { display: true, text: 'Month' } }, y: { title: { display: true, text: 'Average Rating' } } }
        }
    });

    // Stacked Bar Chart - Rating Breakdown by Criteria
    new Chart(ctxStackedBar, {
        type: 'bar',
        data: {
            labels: ['Collaboration', 'Leadership', 'Innovation', 'Teamwork'],
            datasets: [
                { label: 'Employee 1', data: [3, 4, 5, 2], backgroundColor: '#FF6384' },
                { label: 'Employee 2', data: [2, 3, 4, 3], backgroundColor: '#36A2EB' },
                { label: 'Employee 3', data: [4, 2, 3, 5], backgroundColor: '#FFCE56' }
            ]
        },
        options: {
            scales: { x: { stacked: true, title: { display: true, text: 'Criteria' } }, y: { stacked: true, title: { display: true, text: 'Ratings' } } }
        }
    });

    // Pie Chart - Sentiment Analysis of Feedback
    new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: ['Positive', 'Neutral', 'Negative'],
            datasets: [{ data: [60, 25, 15], backgroundColor: ['#4BC0C0', '#FFCE56', '#FF6384'] }]
        }
    });
});
