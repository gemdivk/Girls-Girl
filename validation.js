document.addEventListener('DOMContentLoaded', function () {
    const username = localStorage.getItem('currentUser'); 
    const navbarBrand = document.querySelector('.navbar-brand'); 
    const welcomeMessage = document.getElementById('welcomeMessage'); 
    const loginPrompt = document.getElementById('loginPrompt');

    if (username && navbarBrand) {
        displayWelcomeMessage(username, navbarBrand); 
        if (loginPrompt) {
            loginPrompt.style.display = 'none';
        }
    }

    loginPrompt.onclick = function() {
        const subscribeForm = document.getElementById('subscribeForm');
        subscribeForm.innerHTML = `
            <div class="mb-3">
                <label for="loginUsername" class="form-label">Username or Email</label>
                <input type="text" class="form-control" id="loginUsername" required>
            </div>
            <div class="mb-3">
                <label for="loginPassword" class="form-label">Password</label>
                <input type="password" class="form-control" id="loginPassword" required>
            </div>
            <button type="button" id="loginButton" class="btn btn-outline-light">Log in</button>
            <div id="loginErrorMessage" class="error text-danger mt-2"></div>
            <p id="subscribePrompt" class="mt-2" style="cursor: pointer; color: lightblue;">Not registered? Register now</p>
        `;
        welcomeMessage.textContent = 'Log in to Girls Girl💋';
        loginPrompt.style.display = 'none';

        document.getElementById('loginButton').onclick = handleLogin; 
        document.getElementById('subscribePrompt').onclick = displayRegistrationForm; 
    };

    function displayRegistrationForm() {
        const subscribeForm = document.getElementById('subscribeForm');
        subscribeForm.innerHTML = `
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" required>
            </div>
            <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="confirmPassword" required>
            </div>
            <button type="submit" class="btn btn-outline-light">Register</button>
            <div id="errorMessage" class="error text-danger mt-2"></div>
        `;
        welcomeMessage.textContent = 'Join to Girls Girl💋';
        document.getElementById('logoutButton').style.display = 'none';
        loginPrompt.style.display = 'block'; 
        document.getElementById('subscribePrompt').style.display = 'none'; 
        document.getElementById('errorMessage').textContent = ''; 
    }

    document.getElementById('subscribeForm').onsubmit = function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const errorMessage = document.getElementById('errorMessage');
    
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        if (!passwordRegex.test(password)) {
            errorMessage.textContent = 'Password must contain at least 8 characters, one uppercase letter, one number, and one special symbol (!@#$%^&*).';
        } else if (password !== confirmPassword) {
            errorMessage.textContent = 'Passwords do not match!';
        } else if (localStorage.getItem(username) || localStorage.getItem(email)) {
            errorMessage.textContent = 'User already exists!';
        } else {
            errorMessage.textContent = '';
            localStorage.setItem(username, JSON.stringify({ email, password }));
            localStorage.setItem('currentUser', username); 
            displayWelcomeMessage(username, navbarBrand);
    
            loginPrompt.style.display = 'none'; 
        }
    };

    function displayWelcomeMessage(username, navbarBrand) {
        const userData = JSON.parse(localStorage.getItem(username)); 
        const email = userData ? userData.email : '';
        welcomeMessage.innerHTML = `
            <h>Welcome to Girls Girl!💋</h>
            <p>Your profile information:</p>
            <div class="mb-3">
                <label class="form-label">Username</label>
                <div class="form-control" readonly>${username}</div>
            </div>
            <div class="mb-3">
                <label class="form-label">Email</label>
                <div class="form-control" readonly>${email}</div>
            </div>
        `;
    
        document.getElementById('subscribeForm').style.display = 'none';
        document.getElementById('logoutButton').style.display = 'inline';
    
        updateNavbar(username, navbarBrand); 
    }
    
    

    function updateNavbar(username, navbarBrand) {
        const existingWelcomeMessage = document.querySelector('.welcome-message');
        if (!existingWelcomeMessage) {
            const welcomeText = document.createElement('span');
            welcomeText.textContent = `Welcome, ${username}!`; 
            welcomeText.className = 'welcome-message';
            navbarBrand.appendChild(welcomeText);
        }
    }
    

    function logout() {
        const subscribeForm = document.getElementById('subscribeForm');
        subscribeForm.innerHTML = `
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" name="username" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" name="email" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" name="password" required>
            </div>
            <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" required>
            </div>
            <button type="submit" class="btn btn-outline-light">Register</button>
            <div id="errorMessage" class="error text-danger mt-2"></div>
        `;
        welcomeMessage.textContent = 'Join to Girls Girl💋';
        document.getElementById('subscribeForm').style.display = 'block';
        document.getElementById('logoutButton').style.display = 'none';
        loginPrompt.style.display = 'block';
        document.getElementById('errorMessage').textContent = ''; 

        localStorage.removeItem('currentUser'); 
        clearNavbar(); 
    }

    function clearNavbar() {
        const existingWelcomeMessage = document.querySelector('.welcome-message');
        if (existingWelcomeMessage) {
            existingWelcomeMessage.remove(); 
        }
    }

    document.getElementById('logoutButton').onclick = logout;

    function handleLogin() {
        const loginUsername = document.getElementById('loginUsername').value;
        const loginPassword = document.getElementById('loginPassword').value;
        const loginErrorMessage = document.getElementById('loginErrorMessage');
        const userData = localStorage.getItem(loginUsername);

        if (!userData) {
            loginErrorMessage.textContent = 'Not registered yet.';
        } else {
            const user = JSON.parse(userData);
            if (user.password === loginPassword) {
                localStorage.setItem('currentUser', loginUsername); 
                displayWelcomeMessage(loginUsername, navbarBrand); 
                loginErrorMessage.textContent = ''; 
            } else {
                loginErrorMessage.textContent = 'Incorrect password.';
            }
        }
    }
    
    if (localStorage.getItem('currentUser')) {
        const currentUser = localStorage.getItem('currentUser');
        displayWelcomeMessage(currentUser, navbarBrand); 
    }
});