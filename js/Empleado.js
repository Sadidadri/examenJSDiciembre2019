/**
 * Clase Empleado
 * 
 * @author ADRIAN ÁNGEL MOYA MORUNO
 */


function Empleado(nombre, fechaN, dni) {

    this.nombre = nombre;
    this.fechaN = fechaN;
    this.dni = dni;

}
Empleado.prototype.getNombre = function () {
    return this.nombre;
}

Empleado.prototype.getFecha = function () {
    return this.fechaN;
}

Empleado.prototype.getDni = function () {
    return this.dni;
}

Empleado.prototype.generaHTML = function () {
    return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Adrian Angel Moya Moruno</title>
    </head>
    <body>
        <noscript>Tu navegador no soporta javascript o lo tiene deshabilitado</noscript>
        <h1>Adrián Ángel Moya Moruno</h1>
        <p>Empleado: ${this.nombre}</p>
        <p>Nació: ${this.fechaN}</p>
        <p>DNI: ${this.dni}</p>
    </body>
    </html>
    `;
}

