const name = document.getElementById("name");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const amount = document.getElementById("amount");
const select = document.getElementById("select");
const info = document.getElementById("info");
const btnResume = document.getElementById("btnResume");
const divName = document.createElement("div");
const divLastName = document.createElement("div");
const divEmail = document.createElement("div");
const divAmount = document.createElement("div");
const divSelect = document.createElement("div");
const regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/i;

function formValidation() {

    if (name.value.length < 3) {
        divName.textContent = "Ingrese un nombre válido";
        divName.className = "text-danger";
    } else {
        divName.textContent = "Nombre correcto!";
        divName.className = "text-success";
    }
    if (lastName.value.length < 3) {
        divLastName.textContent = "Ingrese un apellido válido";
        divLastName.className = "text-danger";
    } else {
        divLastName.textContent = "Apellido correcto!";
        divLastName.className = "text-success";
    }
    if (!regExEmail.test(email.value)) {
        divEmail.textContent = "Ingrese un correo válido";
        divEmail.className = "text-danger";
    } else {
        divEmail.textContent = "Correo correcto!";
        divEmail.className = "text-success";
    }
    if (amount.value < 1) {
        divAmount.textContent = "Ingrese una cantidad válida mayor a cero";
        divAmount.className = "text-danger";
    } else {
        divAmount.textContent = "Cantidad correcta!";
        divAmount.className = "text-success";
    }
    if (select.value == "") {
        divSelect.textContent = "Seleccione una categría";
        divSelect.className = "text-danger";
    } else {
        divSelect.textContent = "Categoría seleccionada!";
        divSelect.className = "text-success";
    }

    name.after(divName);
    lastName.after(divLastName);
    email.after(divEmail);
    amount.after(divAmount);
    select.after(divSelect);

    if (amount.value > 0 && select.value != "") {
        switch (select.value) {
            case "1":
                info.textContent = amount.value*200;
                break;
        
            case "2":
                info.textContent = amount.value*200*0.2;
                break;
            case "3":
                info.textContent = amount.value*200*0.5;
                break;
            case "4":
                info.textContent = amount.value*200*0.85;
                break;
        }
    } else {
        info.textContent = "";
    }

}

btnResume.addEventListener("click", formValidation);