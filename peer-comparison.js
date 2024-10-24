// Performance Metrics (Radar Chart)
var ctx1 = document.getElementById('performanceMetricsChart').getContext('2d');
var performanceMetricsChart = new Chart(ctx1, {
    type: 'radar',
    data: {
        labels: ['Teamwork', 'Leadership', 'Efficiency', 'Problem Solving', 'Creativity'],
        datasets: [{
            label: 'Employee A',
            data: [85, 90, 80, 70, 75],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }, {
            label: 'Employee B',
            data: [75, 85, 70, 85, 65],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            r: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
    }
});

// Peer Ranking and Benchmarking (Bar Chart)
var ctx2 = document.getElementById('peerRankingChart').getContext('2d');
var peerRankingChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Employee A', 'Employee B', 'Employee C', 'Employee D'],
        datasets: [{
            label: 'Performance Score',
            data: [85, 78, 92, 88],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Project Participation/Engagement (Polar Area Chart)
var ctx3 = document.getElementById('projectParticipationChart').getContext('2d');
var projectParticipationChart = new Chart(ctx3, {
    type: 'polarArea',
    data: {
        labels: ['Project A', 'Project B', 'Project C', 'Project D'],
        datasets: [{
            label: 'Employee A',
            data: [60, 90, 50, 100],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        }
    }
});

// Efficiency and Time Management (Line Chart)
var ctx4 = document.getElementById('timeManagementChart').getContext('2d');
var timeManagementChart = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Employee A Efficiency',
            data: [65, 70, 75, 80],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 2,
            fill: true
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Time Spent on Tasks (Stacked Bar Chart)
var ctx5 = document.getElementById('taskTimeChart').getContext('2d');
var taskTimeChart = new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: ['Task 1', 'Task 2', 'Task 3', 'Task 4'],
        datasets: [{
            label: 'Employee A',
            data: [3, 4, 2, 5],
            backgroundColor: 'rgba(255, 99, 132, 0.6)'
        }, {
            label: 'Employee B',
            data: [5, 3, 4, 2],
            backgroundColor: 'rgba(54, 162, 235, 0.6)'
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true,
                beginAtZero: true
            }
        }
    }
});






// script.js

// Peer Comparison Radar Chart
const ctx6 = document.getElementById('peerComparisonChart').getContext('2d');

// Sample data for the radar chart (metrics comparison: task completion, efficiency, etc.)
const data = {
    labels: ['Task Completion', 'Efficiency', 'Attendance', 'Overtime', 'Collaboration'],
    datasets: [
        {
            label: 'Employee',
            data: [85, 80, 90, 70, 75],  // Employee's performance across metrics
            backgroundColor: 'rgba(54, 162, 235, 0.4)',  // Light blue background
            borderColor: 'rgba(54, 162, 235, 1)',        // Blue border
            pointBackgroundColor: 'rgba(54, 162, 235, 1)', // Blue points
        },
        {
            label: 'Peer 1',
            data: [75, 85, 85, 60, 80],  // Peer 1's performance across metrics
            backgroundColor: 'rgba(255, 99, 132, 0.4)',  // Light red background
            borderColor: 'rgba(255, 99, 132, 1)',        // Red border
            pointBackgroundColor: 'rgba(255, 99, 132, 1)', // Red points
        },
        {
            label: 'Peer 2',
            data: [80, 75, 88, 65, 85],  // Peer 2's performance
            backgroundColor: 'rgba(75, 192, 192, 0.4)',  // Light green background
            borderColor: 'rgba(75, 192, 192, 1)',        // Green border
            pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Green points
        }
    ]
};

// Radar chart configuration
const config = {
    type: 'radar',
    data: data,
    options: {
        scales: {
            r: {
                beginAtZero: true,
                max: 100  // Set maximum value for percentage-based data
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        }
    }
};

// Create the chart
const peerComparisonChart = new Chart(ctx6, config);








const employeeData = [
    { name: "John Doe", metric1: 85, metric2: 90, metric3: 88, overallScore: 87.67 },
    { name: "Jane Smith", metric1: 92, metric2: 86, metric3: 95, overallScore: 91.00 },
    // Add more employee data here
  ];
  
  const comparisonTable = document.querySelector('.comparison-table table tbody');
  
  employeeData.forEach(employee => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${employee.name}</td>
      <td>${employee.metric1}</td>
      <td>${employee.metric2}</td>
      <td>${employee.metric3}</td>
      <td>${employee.overallScore}</td>
    `;
    comparisonTable.appendChild(row);
  });


