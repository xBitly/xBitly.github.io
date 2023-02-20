function sendToMe(name, email, wish){
    const e = "name=" + name + "&email=" + email + "&wish=" + wish;
    const xhr = new XMLHttpRequest();
    const url = "https://script.google.com/macros/s/AKfycbxshr08-eXb4WipBJOSvc07qXy8p9-a5S7ji5HiKHHvaOLG_QDjeCcH84-Cm0Q4Of6B/exec";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
    xhr.send(e);
}

const form = document.querySelector('form');
const nameInput = form.querySelector('input[name="name"]');
const emailInput = form.querySelector('input[name="email"]');
const wishInput = form.querySelector('textarea[name="wish"]');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = encodeURIComponent(nameInput.value);
    const email = encodeURIComponent(emailInput.value);
    const wish = encodeURIComponent(wishInput.value);

    sendToMe(name, email, wish);

    nameInput.value = '';
    emailInput.value = '';
    wishInput.value = '';
});
