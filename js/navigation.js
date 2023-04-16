function enviar(){
    swal("Recibido!", "Hemos recibido su mensaje correctamente!", "success");
}

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

const cant = document.getElementById("cantidad");

function comprar(){
    if(cant.value>=1){
        swal("Comprado!", "Hemos recibido su pedido!", "success");
    }else{
        alert("Cantidad Errónea");
    }
}