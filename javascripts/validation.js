// La función 'emailValidation' se encarga de validar los correos electrónicos en el formulario.
/*
function emailValidation() {
    const form = document.getElementById('form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        if (form.email.value !== form.email_confirm.value) {
            const element = document.createElement('p');
            const message = document.createTextNode("El correo electrónico no coincide");

            const parentElement = document.getElementsByTagName("td")[6];
            parentElement.appendChild(element);
            element.appendChild(message);
            element.classList.add("alert");

            setTimeout(() => {
                parentElement.removeChild(element);
            }, 3000);
        } else {
            form.submit();
        }
    });
}
*/

window.onload = compararCamposEmail;

function compararCamposEmail() {
    const emailInput = document.getElementById('email');
    const emailConfirmInput = document.getElementById('email_confirm');
    const parentElement = document.getElementsByTagName("td")[6];
    const elementInput = document.getElementsByTagName("td")[5];
    let errorElement; // Variable para almacenar el elemento de error

    emailConfirmInput.addEventListener('input', function () {
        const emailConfirm = emailConfirmInput.value;
        const email = emailInput.value;

        if (email !== emailConfirm) {
            if (!errorElement) {
                errorElement = document.createElement('p');
                const message = document.createTextNode("El correo electrónico no coincide");
                errorElement.appendChild(message);
                errorElement.classList.add("alert");
                parentElement.appendChild(errorElement);
                // Agrega una clase CSS al elemento para cambiar el color de fondo.
                elementInput.className = "contact_input_error";
            }
        } else if (errorElement) {
            console.log('Los correos electrónicos coinciden.');
            parentElement.removeChild(errorElement);
            elementInput.className = "contact_input";
            errorElement = null; // Establecer el elemento de error como nulo
        }
    });
}

/*
function () {
    // Obtiene el elemento <td> en la sexta posición (índice 5).
    const elementInput = document.getElementsByTagName("td")[5];

    // Agrega una clase CSS al elemento para cambiar el color de fondo.
    elementInput.className = "contact_input_error";
};

window.onload = operateCSS;*/