const params = new URLSearchParams(document.location.search.substring(1));

function sendToServer(){
    const source = params.get("source");
    const medium = params.get("medium");
    const campaign = params.get("campaign");
    const agent = navigator.userAgent;
    const platform = navigator.platform;
    const language = navigator.language;

    const e = "source=" + source + "&medium=" + medium + "&campaign=" + campaign + "&agent=" + agent + "&platform=" + platform + "&language=" + language;
    const xhr = new XMLHttpRequest();
    const url = "https://script.google.com/macros/s/AKfycbzJswvWGFv2__g7HTPeWghzSi1jQXZcMqEOs6KBj8KzZcKlpCEoB3AlMg7yW-VlAIbG/exec";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(e);
}

sendToServer();