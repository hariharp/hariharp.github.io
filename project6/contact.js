// JavaScript for form interaction
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the form data
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Validate form data (you can extend this with more detailed checks)
    if (!name || !email || !message) {
        showFormStatus('Please fill in all fields.', 'error');
    } else {
        showFormStatus('Your message has been sent!', 'success');
        clearForm(); // Clear the form after successful submission
    }
});

// Function to show form status message
function showFormStatus(message, type) {
    const statusDiv = document.getElementById('form-status');
    statusDiv.textContent = message;
    statusDiv.className = 'form-status ' + type; // success or error
}

// Function to clear the form
function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}
