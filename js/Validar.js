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
        let nombre = document.getElementById("nombre");
        let regexNombre = /[A-Za-záéíóúÁÉÍÓÚñÑ]{3,}/g;

        if (!regexNombre.test(nombre.value.trim())) {
            spanErrorNombre.innerHTML = "<span id=\"errorNombre\" class=\"error\">Error.El nombre tiene que tener almenos 3 caracteres y no puede contener números ni símbolos.</span>";
        }
        else{
            spanErrorNombre.innerHTML = "<span id=\"errorNombre\"></span>";
        }
    }

    let compruebaFecha = function(){
        let fecha = document.getElementById("fechaN");
        
        let regexFecha = /^(\d{2})[-/](\d{2})[-/](\d{4})$/;

        if(!regexFecha.test(fecha.value.trim())){
            spanErrorFecha.innerHTML = "<span id=\"errorFecha\" class=\"error\">Error.La fecha debe tener el siguiente formato: dd/mm/aaaa o dd-mm-aaaa</span>";
        }
        else{
            spanErrorFecha.innerHTML = "<span id=\"errorFecha\"></span>";
        }
    }

    let compruebaDni = function () {
        let dni = document.getElementById("dni");
        let cadena = "TRWAGMYFPDXBNJZSQVHLCKET";

        let dniValor = dni.value;

        let regexDni = /^(\d{8})[- _]?([A-Z]){1}$/;

        if (regexDni.test(dniValor.trim())) {
            let dniNumeros = regexDni.exec(dniValor)[1];
            let letraDni = regexDni.exec(dniValor)[2];

            let posicion = dniNumeros % 23;

            if (cadena[posicion] != letraDni) {
                spanErrorDni.innerHTML = "<span id=\"errorDni\" class=\"error\">Error.El DNI no es válido</span>";
            }
            else{
                spanErrorDni.innerHTML = "<span id=\"errorDni\"></span>";
            }
        }
        else{
            spanErrorDni.innerHTML = "<span id=\"errorDni\" class=\"error\">Error.El formato del DNI no es válido</span>";
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