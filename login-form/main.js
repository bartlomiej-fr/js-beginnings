const loginForm = document.forms["login-form"];
const emailField = document.querySelector("#form-data-email");
const passwordField = document.querySelector("#form-data-password");

const insertEmail = (email) => {
    emailField.textContent = email;
};

const insertPassword = (password) => {
    passwordField.textContent = password;
};

const refreshData = () => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    if (email) {
        insertEmail(email);
    }

    if (password) {
        insertPassword(password);
    }
};

const updateEmail = (email) => {
    localStorage.setItem("email", email);
};

const updatePassword = (password) => {
    localStorage.setItem("password", password);
};

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (event.target.name === "email") {
        updateEmail(event.target.value);
    } else if (event.target.name === "password") {
        updatePassword(event.target.value);
    }
    refreshData();
});

loginForm.addEventListener("change", (event) => {
    if (event.target.name === "email") {
        updateEmail(event.target.value);
    } else if (event.target.name === "password") {
        updatePassword(event.target.value);
    }
    refreshData();
});

loginForm.addEventListener("reset", (event) => {
    console.log(event);
});

refreshData();
