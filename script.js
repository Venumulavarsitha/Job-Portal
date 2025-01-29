if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login.html";
}


function searchJobs() {
    let input = document.getElementById('search').value.toLowerCase();
    let jobs = document.querySelectorAll('.job');
    jobs.forEach(job => {
        let title = job.querySelector('h2').textContent.toLowerCase();
        if (title.includes(input)) {
            job.style.display = 'block';
        } else {
            job.style.display = 'none';
        }
    });
}


function applyJob(jobTitle) {
    document.getElementById('application-form').classList.remove('hidden');
    document.getElementById('job-title').textContent = "Applying for: " + jobTitle;
}


function closeForm() {
    document.getElementById('application-form').classList.add('hidden');
}


function submitApplication() {
    alert('Application submitted!');
    closeForm();
}


function logout() {
    localStorage.removeItem("isLoggedIn"); 
    window.location.href = "login.html"; 
}


function register() {
    let newUsername = document.getElementById("new-username").value;
    let newPassword = document.getElementById("new-password").value;

    if (newUsername === "" || newPassword === "") {
        alert("Please fill in all fields!");
        return;
    }

    localStorage.setItem("username", newUsername);
    localStorage.setItem("password", newPassword);
    alert("Registration Successful! Now, log in.");
    window.location.href = "login.html"; 
}


if (localStorage.getItem("isLoggedIn") === "true") {
    window.location.href = "index.html";
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        localStorage.setItem("isLoggedIn", "true");
        alert("Login Successful!");
        window.location.href = "index.html"; 
    } else {
        alert("Invalid Username or Password!");
    }
}
