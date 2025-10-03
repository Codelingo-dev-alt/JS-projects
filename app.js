const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const showResult = document.querySelector('.showResult');

form.addEventListener('submit', function (event) {
   event.preventDefault();
   if (username.value === '' || email.value === '' || password.value === '') {
      showResult.style.color = 'red';
      showResult.textContent = 'Please fill in all fields.';
   } else if (username.value.length < 3) {
      showResult.style.color = 'red';
      showResult.textContent = 'Username must be at least 3 characters long.';
   } else if (username.value.length > 15) {
      showResult.style.color = 'red';
      showResult.textContent = 'Username must be less than 15 characters long.';
   } else if (/\d/.test(username.value)) {
      showResult.style.color = 'red';
      showResult.textContent = 'Username must not contain numbers.';
   } else if (email.value.length > 50) {
      showResult.style.color = 'red';
      showResult.textContent = 'Email must be less than 50 characters long.';
   } else if (password.value.length > 20) {
      showResult.style.color = 'red';
      showResult.textContent = 'Password must be less than 20 characters long.';
   } else if (password.value.toLowerCase() === 'password') {
      showResult.style.color = 'red';
      showResult.textContent = 'Password cannot be "password".';
   } else if (password.value === username.value) {
      showResult.style.color = 'green';
      showResult.textContent = `Welcome, ${username.value}!`;
   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      showResult.style.color = 'red';
      showResult.textContent = 'Please enter a valid email address.';
   } else if (password.value.length < 6) {
      showResult.style.color = 'red';
      showResult.textContent = 'Password must be at least 6 characters long.';
   } else {
      showResult.style.color = 'green';
      showResult.textContent = `Welcome, ${username.value}!`;
   }
});