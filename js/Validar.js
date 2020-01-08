/**
 * Capa de validacion de datos del formulario
 * 
 * @author ADRIAN ÁNGEL MOYA MORUNO
 */

let Validar = {
    compruebaNombre(texto) {
        let regexNombre = /^([A-ZÁÉÍÓÚÑ][a-záéíóúñ]{2,} /s)([A-ZÁÉÍÓÚÑ][a-záéíóúñ]{2,})$/g;

        if (!regexNombre.test(texto)) {
            return "Error.El nombre tiene que tener almenos 3 caracteres y no puede contener números ni símbolos.";
        }
        else {
            return "";
        }
    },
    compruebaFecha(texto) {
        let regexFecha = /^\d{2}[-/]\d{2}[-/]\d{4}$/;

        if (!regexFecha.test(texto)) {
            return "Error.La fecha debe tener el siguiente formato: dd/mm/aaaa o dd-mm-aaaa";
        }
        else {
            return "";
        }
    },
    compruebaDni(texto) {
        let cadena = "TRWAGMYFPDXBNJZSQVHLCKET";

        let dniValor = texto;

        let regexDni = /^(\d{8})[- _]?([A-Z]){1}$/;

        if (regexDni.test(dniValor.trim())) {
            let dniComprobado = regexDni.exec(dniValor);
            let dniNumeros = dniComprobado[1];
            let letraDni = dniComprobado[2];

            let posicion = dniNumeros % 23;

            if (cadena[posicion] != letraDni) {
                return "Error.El DNI no es válido";
            }
            else {
                return "";
            }
        }
        else {
            return "Error.El formato del DNI no es válido";
        }
    }

}
