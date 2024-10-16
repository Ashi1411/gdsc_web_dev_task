// Define the attendance data
const totalDays = 30;
const presentDays = 25;
const absentDays = totalDays - presentDays;

// Get the context of the canvas element we want to draw on
const ctx = document.getElementById('attendanceChart').getContext('2d');

// Create a bar chart
const attendanceChart = new Chart(ctx, {
    type: 'bar', // Define chart type as bar
    data: {
        labels: ['Total Days', 'Present Days', 'Absent Days'], // Labels for the data
        datasets: [{
            label: 'Attendance Overview',
            data: [totalDays, presentDays, absentDays], // Data to be plotted
            backgroundColor: [
                'rgba(54, 162, 235, 0.7)',  // Blue for Total Days
                'rgba(75, 192, 192, 0.7)',  // Green for Present Days
                'rgba(255, 99, 132, 0.7)'   // Red for Absent Days
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',    // Border Blue
                'rgba(75, 192, 192, 1)',    // Border Green
                'rgba(255, 99, 132, 1)'     // Border Red
            ],
            borderWidth: 2 // Width of the borders
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true, // Start y-axis at 0
                title: {
                    display: true,
                    text: 'Number of Days'
                }
            }
        },
        plugins: {
            legend: {
                display: false // Disable the default legend
            }
        }
    }
});
