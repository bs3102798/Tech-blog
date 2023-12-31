const TechLoginFormHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in.');
        }
    }
};

const TechLoginForm = document.querySelector('.chess-login-form');
if (TechLoginForm) {
    TechLoginForm.addEventListener('submit', TechLoginFormHandler);
}