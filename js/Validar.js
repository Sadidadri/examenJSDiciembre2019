/**
 * Capa de validacion de datos del formulario
 * 
 * @author ADRIAN ÁNGEL MOYA MORUNO
 */
{
    let nombre;
    let fechaN;
    let dni;
    let spanErrorNombre;
    let spanErrorFecha;
    let spanErrorDni;


    let compruebaNombre = function () {
        //let nombre = document.getElementById("nombre");
        let regexNombre = /^[A-Za-záéíóúÁÉÍÓÚñÑ]{3,}$/g;

        if (!regexNombre.test(nombre.value.trim())) {
            spanErrorNombre.innerHTML = "Error.El nombre tiene que tener almenos 3 caracteres y no puede contener números ni símbolos.";
        }
        else{
            spanErrorNombre.innerHTML = "";
        }
    }

    let compruebaFecha = function(){
        
        let regexFecha = /^\d{2}[-/]\d{2}[-/]\d{4}$/;

        if(!regexFecha.test(fechaN.value.trim())){
            spanErrorFecha.innerHTML = "Error.La fecha debe tener el siguiente formato: dd/mm/aaaa o dd-mm-aaaa";
        }
        else{
            spanErrorFecha.innerHTML = "";
        }
    }

    let compruebaDni = function () {
        //let dni = document.getElementById("dni");
        let cadena = "TRWAGMYFPDXBNJZSQVHLCKET";

        let dniValor = dni.value;

        let regexDni = /^(\d{8})[- _]?([A-Z]){1}$/;

        if (regexDni.test(dniValor.trim())) {
            let dniComprobado = regexDni.exec(dniValor);
            let dniNumeros = dniComprobado[1];
            let letraDni = dniComprobado[2];

            let posicion = dniNumeros % 23;

            if (cadena[posicion] != letraDni) {
                spanErrorDni.innerHTML = "Error.El DNI no es válido";
            }
            else{
                spanErrorDni.innerHTML = "";
            }
        }
        else{
            spanErrorDni.innerHTML = "Error.El formato del DNI no es válido";
        }
    }

    let init = () => {
        nombre = document.getElementById("nombre");
        fechaN = document.getElementById("fechaN");
        dni = document.getElementById("dni");
        spanErrorNombre = document.getElementById("errorNombre");
        spanErrorFecha = document.getElementById("errorFecha");
        spanErrorDni = document.getElementById("errorDni")

        fechaN.addEventListener("blur",compruebaFecha);
        nombre.addEventListener("blur",compruebaNombre);
        dni.addEventListener("blur", compruebaDni);
        
    }


    document.addEventListener("DOMContentLoaded", init);
}