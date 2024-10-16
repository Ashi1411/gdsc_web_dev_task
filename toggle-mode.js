// document.addEventListener('DOMContentLoaded', function () {
//     const toggleButton = document.getElementById('mode-toggle');
//     const body = document.body;

//     // Check if dark mode was previously enabled
//     const isDarkMode = localStorage.getItem('darkMode') === 'true';

//     // Apply the saved mode
//     if (isDarkMode) {
//         body.classList.add('dark-mode');
//         // toggleButton.textContent = 'Switch to Light Mode';
//     } else {
//         body.classList.remove('dark-mode');
//         // toggleButton.textContent = 'Switch to Dark Mode';
//     }

//     // Add event listener for the button click
//     toggleButton.addEventListener('click', function () {
//         body.classList.toggle('dark-mode');
        
//         // Update button text
//         if (body.classList.contains('dark-mode')) {
//             // toggleButton.textContent = 'Switch to Light Mode';
//             localStorage.setItem('darkMode', 'true');
//         } else {
//             // toggleButton.textContent = 'Switch to Dark Mode';
//             localStorage.setItem('darkMode', 'false');
//         }
//     });
// });
