// JavaScript to validate password input
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value.trim();
    const correctPassword = "Jim Bob";
    const errorMessage = document.getElementById('errorMessage');
    
    // Check if the password is valid
    if (password === correctPassword) {
        errorMessage.classList.add('hidden');
        alert('Login successful!');
        window.location.href = "rollpage.html";
        // Redirect or perform other actions here
    } else {
        alert('Wrong password! Only for Audrey');
        errorMessage.classList.remove('hidden');
    }
});
