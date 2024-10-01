document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const statusMessage = document.getElementById('statusMessage');

    // Basic form validation
    if (name === "" || email === "" || message === "") {
        statusMessage.textContent = "Please fill out all fields.";
        return;
    }

    if (!validateEmail(email)) {
        statusMessage.textContent = "Please enter a valid email address.";
        return;
    }

    statusMessage.textContent = "Form submitted successfully!";
    statusMessage.style.color = "green";
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
