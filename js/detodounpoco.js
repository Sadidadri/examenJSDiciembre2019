/**
 * Script que se encarga de añadir comportamiento a la ventana de todo un poco
 * @author ADRIAN ÁNGEL MOYA MORUNO
 */
{
    let botones;

    let elegirDia = function(indice){
        switch (indice) {
            case 0:
                return "Domingo";
            case 1:
                return "Lunes";
            case 2:
                return "Martes";
            case 3:
                return "Miércoles";
            case 4:
                return "Jueves";
            case 5:
                return "Viernes";
            default:
                return "Sábado";
        }
    }

    let informar = () =>{
        let fechaActual = new Date();
        let dia = elegirDia(fechaActual.getDay());
        
        let primerParrafo = document.createElement("p");
        let textoPrimerParrafo = document.createTextNode("Hoy es: "+dia);
        primerParrafo.appendChild(textoPrimerParrafo);
        document.body.appendChild(primerParrafo);

        let horas = fechaActual.getHours().toString();
        if(horas.length == 1){
            horas = "0"+horas;
        }
        
        let minutos = fechaActual.getMinutes().toString();
        if(minutos.length == 1){
            minutos = "0"+minutos;
        }

        let mensaje = "";
        if(horas >= 18){
            mensaje = "Son las "+horas+":"+minutos+". Ya es hora de que dejes de trabajar. Hay que conciliar la vida laboral con la familiar";
        }else if(horas < 8){
            mensaje = "Son las "+horas+":"+minutos+". Ya es hora de que comiences a trabajar. Hay que levantar el país.";
        }
        else{
            mensaje = "Son las "+horas+":"+minutos+". Pronto llegan las vacaciones. Aguanta";
        }


        let segundoParrafo = document.createElement("p");
        let textoSegundoParrafo = document.createTextNode(mensaje);
        segundoParrafo.appendChild(textoSegundoParrafo);
        document.body.appendChild(segundoParrafo);

    }

    let cerrarVentana = () =>{
        window.close();
    }

    let init = () =>{
        botones = document.getElementsByTagName("button");
        botones[0].addEventListener("click",informar); //Boton 0 es el boton informa
        
        botones[1].addEventListener("click",cerrarVentana); //Boton 1 es el boton cerrar
    }

    document.addEventListener("DOMContentLoaded",init);
}
