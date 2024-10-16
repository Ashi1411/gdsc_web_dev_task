document.addEventListener("DOMContentLoaded", function() {
    // Example list of upcoming meetings
    const meetings = [
        {
            title: "Project Kickoff Meeting",
            date: "2024-10-20",
            time: "10:00 AM",
            organizer: "John Doe"
        },
        {
            title: "Design Review",
            date: "2024-10-22",
            time: "2:00 PM",
            organizer: "Jane Smith"
        },
        {
            title: "Weekly Standup",
            date: "2024-10-23",
            time: "9:00 AM",
            organizer: "Team Lead"
        }
    ];

    // Function to render the meeting list
    function renderMeetings(meetings) {
        const meetingList = document.getElementById("meeting-list");

        meetings.forEach(meeting => {
            // Create a new div for the meeting card
            const meetingCard = document.createElement("div");
            meetingCard.classList.add("meeting-card");

            // Meeting Info div
            const meetingInfo = document.createElement("div");
            meetingInfo.classList.add("meeting-info");

            const titleElement = document.createElement("div");
            titleElement.classList.add("meeting-title");
            titleElement.textContent = meeting.title;

            const dateTimeElement = document.createElement("div");
            dateTimeElement.classList.add("meeting-date-time");
            dateTimeElement.textContent = `${meeting.date} at ${meeting.time}`;

            const organizerElement = document.createElement("div");
            organizerElement.classList.add("meeting-organizer");
            organizerElement.textContent = `Organizer: ${meeting.organizer}`;

            // Append elements to the meeting info
            meetingInfo.appendChild(titleElement);
            meetingInfo.appendChild(dateTimeElement);
            meetingInfo.appendChild(organizerElement);

            // Append the meeting info to the card
            meetingCard.appendChild(meetingInfo);

            // Append the meeting card to the meeting list
            meetingList.appendChild(meetingCard);
        });
    }

    // Render the meetings on page load
    renderMeetings(meetings);
});
