let cambio = false;

function cambiarColor(){

    if(cambio == false){

        document.body.style.backgroundColor = "#89388b";

        cambio = true;

    }else{

        document.body.style.backgroundColor = "white";

        cambio = false;

    }

}