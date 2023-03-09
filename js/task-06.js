const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (e) => {
    
    if (e.target.value.length == inputEl.dataset.length) {

        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
        }
    else {
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
    }
})