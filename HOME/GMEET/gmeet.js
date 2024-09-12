document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('scheduleForm');
    const meetingList = document.getElementById('meetingList');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting the traditional way
    
        const title = document.getElementById('meetingTitle').value;
        const date = document.getElementById('meetingDate').value;
        const time = document.getElementById('meetingTime').value;
        const reminder = document.getElementById('reminderTime').value;
        const link = document.getElementById('meetingLink').value;
    
        // Validation
        if (!title || !date || !time || !reminder || !link) {
            alert('Please fill in all fields.');
            return;
        }
    
        // Create meeting details
        const meetingItem = document.createElement('li');
        meetingItem.innerHTML = `
            <strong>${title}</strong><br>
            Date: ${date}<br>
            Time: ${time}<br>
            Reminder: ${reminder} minutes before<br>
            <a href="${link}" target="_blank">Join Google Meet</a>
        `;
    
        // Append to the list
        meetingList.appendChild(meetingItem);
    
        // Reset form
        form.reset();
    });
});
