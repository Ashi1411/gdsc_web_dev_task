document.addEventListener("DOMContentLoaded", function () {
    // Data for Monthly Attendance Chart
    const monthlyData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Present Days',
            data: [5, 6, 4, 5],
            backgroundColor: '#4CAF50'
        }, {
            label: 'Absent Days',
            data: [0, 1, 2, 1],
            backgroundColor: '#FF5733'
        }, {
            label: 'Late Arrivals',
            data: [1, 0, 1, 0],
            backgroundColor: '#FFC300'
        }]
    };

    // Create Monthly Attendance Chart
    const monthlyCtx = document.getElementById('monthlyAttendanceChart').getContext('2d');
    new Chart(monthlyCtx, {
        type: 'bar',
        data: monthlyData,
        options: {
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                    title: { display: true, text: 'Weeks of the Month' }
                },
                y: {
                    stacked: true,
                    title: { display: true, text: 'Days' }
                }
            }
        }
    });

    // Data for Yearly Attendance Chart
    const yearlyData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Present Days',
            data: [20, 18, 22, 21, 20, 19, 20, 22, 21, 23, 19, 20],
            backgroundColor: '#4CAF50'
        }, {
            label: 'Absent Days',
            data: [2, 5, 3, 1, 4, 3, 2, 1, 3, 2, 4, 3],
            backgroundColor: '#FF5733'
        }, {
            label: 'Late Arrivals',
            data: [3, 2, 0, 1, 2, 1, 0, 3, 1, 2, 1, 2],
            backgroundColor: '#FFC300'
        }]
    };

    // Create Yearly Attendance Chart
    const yearlyCtx = document.getElementById('yearlyAttendanceChart').getContext('2d');
    new Chart(yearlyCtx, {
        type: 'bar',
        data: yearlyData,
        options: {
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                    title: { display: true, text: 'Months of the Year' }
                },
                y: {
                    stacked: true,
                    title: { display: true, text: 'Days' }
                }
            }
        }
    });    
});



const ctx = document.getElementById('doughnutChart').getContext('2d');

// Data for the chart
const hoursWorked = 6; // Replace with actual data
const totalHours = 8;
const remainingHours = totalHours - hoursWorked;

// Update HTML with hours
document.getElementById('hours-worked').textContent = hoursWorked;
document.getElementById('remaining-hours').textContent = remainingHours;

// Create doughnut chart
const doughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Hours Worked', 'Remaining Hours'],
        datasets: [{
            data: [hoursWorked, remainingHours],
            backgroundColor: ['#4ca2af', '#e0e0e0'],
            borderWidth: 0 // Hide borders
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true // Show legend
            },
            tooltip: {
                enabled: true // Enable tooltip
            }
        }
    }
});



const c = document.getElementById('leaveDistributionChart').getContext('2d');

// Data for the chart
const leaveData = {
    labels: ['Casual Leave', 'Sick Leave', 'Half-days', 'Overtimes', 'Available Leaves'],
    datasets: [{
        data: [5, 3, 2, 4, 6], // Example data for leave distribution
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        borderWidth: 1
    }]
};

// Create doughnut chart
const leaveDistributionChart = new Chart(c, {
    type: 'doughnut',
    data: leaveData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true, // Show the legend
                position: 'top'
            },
            tooltip: {
                enabled: true // Show tooltips on hover
            }
        }
    }
});








