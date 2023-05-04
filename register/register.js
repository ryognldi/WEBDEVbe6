const form = document.getElementById('register');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const userData = Object.fromEntries(formData.entries());

  fetch('https://64533f36c18adbbdfe98541e.mockapi.io/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  });

