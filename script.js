var input = document.getElementById("one")
var output = document.getElementById("two")
var translate = document.getElementById("submit")
var apiUrl = "https://api.funtranslations.com/translate/minion.json";

function errorHandle(error) {    
    alert('Error occurred')
    console.log("error occurred", error);
}

function clickHandler() {        
    var text = input.value;
    var updatedUrl = apiUrl + "?text=" + text;
    fetch(updatedUrl).then(response =>
    response.json()).then(json =>
    output.innerText = 
        (json.contents.translated)).catch(errorHandle);
}

translate.addEventListener("click", clickHandler);    
