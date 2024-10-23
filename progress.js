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
// Data for the chart (adjust as necessary)
const completedTasks = 28; // Number of completed tasks for the month
const totalTasks = 35; // Total tasks assigned this month

const remainingTasks = totalTasks - completedTasks;
const completionPercentage = Math.round((completedTasks / totalTasks) * 100);

// Doughnut chart configuration
const ctx = document.getElementById('taskCompletionChart').getContext('2d');
const taskCompletionChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Completed Tasks', 'Remaining Tasks'],
        datasets: [{
            data: [completedTasks, remainingTasks],
            backgroundColor: ['#28a745', '#f4f4f4'], // Green for completed, grey for remaining
            hoverBackgroundColor: ['#218838', '#d3d3d3'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%', // To make it look like a doughnut
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw} tasks`;
                    }
                }
            },
            legend: {
                position: 'bottom'
            },
            title: {
                display: true,
                text: `Task Completion: ${completionPercentage}%`
            }
        }
    }
});

 //? Data for Monthly Project Progress (adjust as necessary)
 const monthlyCompleted = 7; // Number of projects completed this month
 const monthlyTotal = 10; // Total projects assigned this month
 const monthlyRemaining = monthlyTotal - monthlyCompleted;
 const monthlyPercentage = Math.round((monthlyCompleted / monthlyTotal) * 100);

 // Data for Yearly Project Progress (adjust as necessary)
 const yearlyCompleted = 55; // Number of projects completed this year
 const yearlyTotal = 75; // Total projects assigned this year
 const yearlyRemaining = yearlyTotal - yearlyCompleted;
 const yearlyPercentage = Math.round((yearlyCompleted / yearlyTotal) * 100);

 // Monthly Project Progress Doughnut Chart
 const monthlyCtx = document.getElementById('monthlyProjectProgressChart').getContext('2d');
 const monthlyProjectProgressChart = new Chart(monthlyCtx, {
     type: 'doughnut',
     data: {
         labels: ['Completed Projects', 'Remaining Projects'],
         datasets: [{
             data: [monthlyCompleted, monthlyRemaining],
             backgroundColor: ['#f48d05', '#f4f4f4'], 
             hoverBackgroundColor: ['#e7880b', '#d3d3d3'],
             borderWidth: 1
         }]
     },
     options: {
         responsive: true,
         maintainAspectRatio: false,
         cutout: '70%',
         plugins: {
             tooltip: {
                 callbacks: {
                     label: function(tooltipItem) {
                         return `${tooltipItem.label}: ${tooltipItem.raw} projects`;
                     }
                 }
             },
             legend: {
                 position: 'bottom'
             },
             title: {
                 display: true,
                 text: `Monthly Project Completion: ${monthlyPercentage}%`
             }
         }
     }
 });

 //? Yearly Project Progress Doughnut Chart
 const yearlyCtx = document.getElementById('yearlyProjectProgressChart').getContext('2d');
 const yearlyProjectProgressChart = new Chart(yearlyCtx, {
     type: 'doughnut',
     data: {
         labels: ['Completed Projects', 'Remaining Projects'],
         datasets: [{
             data: [yearlyCompleted, yearlyRemaining],
             backgroundColor: ['#007bff', '#f4f4f4'], 
             hoverBackgroundColor: ['#0c74e2', '#d3d3d3'],
             borderWidth: 1
         }]
     },
     options: {
         responsive: true,
         maintainAspectRatio: false,
         cutout: '70%',
         plugins: {
             tooltip: {
                 callbacks: {
                     label: function(tooltipItem) {
                         return `${tooltipItem.label}: ${tooltipItem.raw} projects`;
                     }
                 }
             },
             legend: {
                 position: 'bottom'
             },
             title: {
                 display: true,
                 text: `Yearly Project Completion: ${yearlyPercentage}%`
             }
         }
     }
 });

 //? Data for goals (you can pull this from a database or API)
 const dailyGoals = {
    total: 5,
    completed: 4
};

const weeklyGoals = {
    total: 10,
    completed: 7
};

const monthlyGoals = {
    total: 20,
    completed: 15
};

// Update daily goals
document.getElementById('dailyCompleted').textContent = dailyGoals.completed;
const dailyProgress = (dailyGoals.completed / dailyGoals.total) * 100;
document.getElementById('dailyProgressFill').style.width = dailyProgress + '%';

// Update weekly goals
document.getElementById('weeklyCompleted').textContent = weeklyGoals.completed;
const weeklyProgress = (weeklyGoals.completed / weeklyGoals.total) * 100;
document.getElementById('weeklyProgressFill').style.width = weeklyProgress + '%';

// Update monthly goals
document.getElementById('monthlyCompleted').textContent = monthlyGoals.completed;
const monthlyProgress = (monthlyGoals.completed / monthlyGoals.total) * 100;
document.getElementById('monthlyProgressFill').style.width = monthlyProgress + '%';


//? Employee's efficiency score (you can get this from an API or backend system)
const efficiencyScore = 85; // For example, 85%

// Display the efficiency score in the circle
document.getElementById('efficiencyPercentage').textContent = efficiencyScore + '%';

// Animate the circular progress bar based on the efficiency score
const outerCircle = document.querySelector('.outer-circle');
outerCircle.style.background = `conic-gradient(#28a745 ${efficiencyScore * 3.6}deg, #e0e0e0 ${efficiencyScore * 3.6}deg)`;

// ?Pie Chart: Skill Distribution
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
