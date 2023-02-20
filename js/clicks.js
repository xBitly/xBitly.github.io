const links = document.getElementsByTagName("a");

function sendToServer(name){
    const e = "name=" + name;
    const xhr = new XMLHttpRequest();
    const url = "https://script.google.com/macros/s/AKfycbwif0or4pwilfpUEINQcYMzOVTWW4unGy_EHBEPKPF2muzED-IHNQ5JtRjLCOfrDCm4RQ/exec";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(e);
}

for(let i=0; i<links.length; i++) {
    links[i].addEventListener("click", function() {
        sendToServer(links[i].getAttribute("id"));
    });
}
