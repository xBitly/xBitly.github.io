function sendToMe(name, email, wish){
    const e = "name=" + name + "&email=" + email + "&wish=" + wish;
    const xhr = new XMLHttpRequest();
    const url = "https://script.google.com/macros/s/AKfycbx5o9fyX5zCZGsMjulv4J8gQtpuHQcx8zEF2vKw3fstokXuevN6maRWly9xaqrYilYc/exec";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"; charset=UTF-8');
    xhr.send(e);
}

const form = document.querySelector('form');
const nameInput = form.querySelector('input[name="name"]');
const emailInput = form.querySelector('input[name="email"]');
const wishInput = form.querySelector('textarea[name="wish"]');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const wish = wishInput.value;

    sendToMe(name, email, wish);

    nameInput.value = '';
    emailInput.value = '';
    wishInput.value = '';
});
