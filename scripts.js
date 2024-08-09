const formTitle = document.getElementById('form-title');
const authForm = document.getElementById('auth-form');
const submitButton = document.getElementById('submit-button');
const toggleText = document.getElementById('toggle-text');
const toggleLink = document.getElementById('toggle-link');

let isLogin = true;

toggleLink.addEventListener('click', function(e) {
    e.preventDefault();
    isLogin = !isLogin;
    if (isLogin) {
        formTitle.textContent = 'Login';
        submitButton.textContent = 'Login';
        toggleText.innerHTML = "Don't have an account? <a href='#' id='toggle-link'>Sign Up</a>";
    } else {
        formTitle.textContent = 'Sign Up';
        submitButton.textContent = 'Sign Up';
        toggleText.innerHTML = "Already have an account? <a href='index.html' id='toggle-link'>Login</a>";
    }
});

authForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (isLogin) {
        let storedPassword = localStorage.getItem(username);
        if (storedPassword && storedPassword === password) {
            window.location.href = 'admin.html';
            // Redirect to the dashboard page or perform any other action
        } else {
            alert('Invalid username or password');
        }
    } else {
        if (localStorage.getItem(username)) {
            alert('User already exists');
        } else {
            localStorage.setItem(username, password);
            alert('User registered successfully');
        }
    }
});
