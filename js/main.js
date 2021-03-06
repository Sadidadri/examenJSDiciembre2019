/**
 * Script que se encarga de controlar el comportamiento del enlace y boton del index
 * 
 * @author ADRIAN ÁNGEL MOYA MORUNO
 */

{

    let enlace;
    let boton;

    
    let init = () =>{
        enlace = document.getElementById("enlace");
        
        enlace.addEventListener("click",() =>{ //Cuando se pulsa el enlace
            event.preventDefault();
            let ventana = window.open("","","");
            ventana.document.write(
                `<!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>Adrián Ángel Moya Moruno</title>
                    <script src="js/detodounpoco.js"></script>
                </head>
                <body>
                    <noscript>Tu navegador no soporta javascript o lo tiene deshabilitado</noscript>
                    <h1>Adrián Ángel Moya Moruno</h1>
                    <button id=\"informar\">Informa</button>
                    <button id=\"salir\">Salir</button>
                </body>
                </html>`
            );
            ventana.document.close();

        });

        boton = document.getElementById("boton");
        
        boton.addEventListener("click",() =>{ //Cuando se pulsa el boton
            let ventanaEmpleado = window.open("./pages/empleado.html","Adrian Angel Moya Moruno","");
        });
    }



    document.addEventListener("DOMContentLoaded",init);
}

 