export function valida(input) {
    const tipoDeInput = input.dataset.tipo; // conecta todos los data y selecciona el data-tipo
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }
    //console.log(input.parentElement);
    if (input.validity.valid){
        input.parentElement.classList.remove('input-container--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = ""
    } else {
        input.parentElement.classList.add('input-container--invalid')
        input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeDeError(tipoDeInput, input)
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMissing",
    "patternMismatch",
    "customError",
];

const mensajesDeError = { //Objeto
    nombre : {
        valueMissing: "El campo nombre no puede estar vacio",
    },
    email: {
        valueMissing: "El campo correo no puede estar vacio",
        typeMissing: "El correo no es valido",
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacio",
        patternMismatch: "El campo debe contener al menos 10 caracteres"
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacio",
        patternMismatch: "Mínimo 10 caracteres, máximo 100",
    },
}

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]){
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
        }
    });
    return mensaje;
};