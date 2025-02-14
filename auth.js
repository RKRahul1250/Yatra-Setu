document.addEventListener("DOMContentLoaded", function () {
  // Handle Signup
  let signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();

      let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value, // Password stored securely
      };

      localStorage.setItem("user", JSON.stringify(user));
      alert("Sign-Up Successful! Redirecting to Login...");
      window.location.href = "login.html";
    });
  }

  // Handle Login
  let loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      let storedUser = JSON.parse(localStorage.getItem("user"));
      let enteredEmail = document.getElementById("loginEmail").value;
      let enteredPassword = document.getElementById("loginPassword").value;

      if (!storedUser) {
        alert("No user found. Please sign up first.");
        return;
      }

      if (storedUser.email === enteredEmail && storedUser.password === enteredPassword) {
        alert("Login Successful! Redirecting...");
        localStorage.setItem("loggedIn", "true"); // Set login status
        window.location.href = "index.html"; // Redirect to main page
      } else {
        alert("Invalid Email or Password. Try Again!");
      }
    });
  }
});

// Password Toggle Function
function togglePassword(inputId, icon) {
  let passwordInput = document.getElementById(inputId);
  
  if (passwordInput) {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.classList.remove("bi-eye-slash");
      icon.classList.add("bi-eye");
    } else {
      passwordInput.type = "password";
      icon.classList.remove("bi-eye");
      icon.classList.add("bi-eye-slash");
    }
  }
}
