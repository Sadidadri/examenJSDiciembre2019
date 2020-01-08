/**
 * Script de la ventana creada
 * 
 * @author ADRIAN ÁNGEL MOYA MORUNO
 */
{

    let creaEmpleado = () => {
        let empleado = new Empleado(document.getElementById("nombre").value,
                                    document.getElementById("fechaN").value,
                                    document.getElementById("dni").value
                                    );

        let ventanaEmpleado = window.open("", "", "");
        ventanaEmpleado.document.write(empleado.generaHTML());
        ventanaEmpleado.document.close();

    }
    

    let init = () => {
        boton = document.getElementById("creaEmpleado");

        boton.addEventListener("click", creaEmpleado);
    }


    document.addEventListener("DOMContentLoaded", init);
}