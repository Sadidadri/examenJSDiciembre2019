{
    let chequeaNombre = function(){
        return spanErrorNombre.innerHTML = Validar.compruebaNombre(nombre.value);
    }
    let chequeaFecha = function(){
        return spanErrorFecha.innerHTML = Validar.compruebaFecha(fechaN.value);
    }
    let chequeaDni = function(){
        return spanErrorDni.innerHTML = Validar.compruebaDni(dni.value);
    }
    let creaEmpleado = function(){
        event.preventDefault();

        let cadena = chequeaNombre() + chequeaFecha() + chequeaDni();
        if(cadena.length === 0){

            let empleado = new Empleado(document.getElementById("nombre").value,
                                    document.getElementById("fechaN").value,
                                    document.getElementById("dni").value
                                    );

            empleado.creaVentana();

            nombre.value = dni.value = fechaN.value = ""; //Todo es correcto, se crea la ventana y se vacian los inputs
        }
    }


    let init = function(){

        boton = document.getElementById("creaEmpleado");

        nombre = document.getElementById("nombre");
        fechaN = document.getElementById("fechaN");
        dni = document.getElementById("dni");
        spanErrorNombre = document.getElementById("errorNombre");
        spanErrorFecha = document.getElementById("errorFecha");
        spanErrorDni = document.getElementById("errorDni")

        fechaN.addEventListener("blur",chequeaFecha);
        nombre.addEventListener("blur",chequeaNombre);
        dni.addEventListener("blur", chequeaDni);
        boton.addEventListener("click", creaEmpleado);
    }
    document.addEventListener("DOMContentLoaded",init)
}