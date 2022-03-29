const form = document.querySelector("form");
const input = document.querySelector("input");
const error = document.querySelector("p.error");

form.addEventListener( "invalid", (event) => {
    event.preventDefault();
    if(!input.classList.contains("invalid")) {
        input.classList.add("invalid");
    }

    error.classList.remove("empty");

    if(input.value.trim() === "") {
        error.innerHTML = "";
        error.classList.add("empty");
    }

    if(!error.classList.contains("visible")) {
        error.classList.add("visible");
    }
}, true);