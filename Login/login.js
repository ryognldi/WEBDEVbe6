// URL of your MockAPI
const apiURL = 'https://643cc81ef0ec48ce9049e65f.mockapi.io/api/v1/user';
const isLoggedIn = localStorage.getItem('isLoggedIn');

// Register function
const registerForm = document.querySelector('#register-form');

function register() {
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();;

        const data = {
            name: document.getElementById('UsernameX').value,
            email: document.getElementById('EmailX').value,
            password: document.getElementById('PasswordX').value
        };

        fetch(apiURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');

                }
                document.getElementById('register-form').reset(); // mengosongkan nilai input
                document.getElementById('register-success').classList.remove('d-none'); // menampilkan notifikasi
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                document.getElementById('register-failure').classList.remove('d-none'); // menampilkan notifikasi danger
                console.error('Error:', error);
            });
    })
};