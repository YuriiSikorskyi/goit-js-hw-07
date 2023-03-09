const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();
    
    if (event.currentTarget.elements.email.value =="" || event.currentTarget.elements.password.value =="") {
        alert("Всі поля повинні бути заповнені.");
    }
    else {
        const email = event.currentTarget.elements.email.value;
        const password = event.currentTarget.elements.password.value;

        const formData = {
            email,
            password,
        }
    console.log(formData);
    formEl.reset();

    }
}
