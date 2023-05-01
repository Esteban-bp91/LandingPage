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
    let cant = document.getElementById("cantidad");
    if(cant.value>=1){
        swal("Comprado!", "Hemos recibido su pedido!", "success");
    }else{
        swal("Error!", "Cantidad Errónea!", "warning");
    }
}


function cambiarImagen(){
    console.log("Estamos dentro de cambiarImagen");

    let color = document.getElementById("color");
    let imagen = document.getElementById("img");

    if (color.value == "Blanco"){
        console.log("Blanco");
        imagen.src="media/img/riel extensible.jpg";
    }
    if (color.value == "Negro"){
        console.log("Negro");
        imagen.src="media/img/negro.jpeg";
    }
    if (color.value == "Gris"){
        console.log("Gris");
        imagen.src="media/img/gris.jpeg";
    }
    if (color.value == "Beige"){
        console.log("Beige");
        imagen.src="media/img/beige.jpeg";
    }
}


function actualizarPrecio() {   //Funcion actualizarPrecio para actualizar el precio según la cantidad seleccionada. No funciona
    let cantidad = document.getElementById("cantidad").value;
    let precio = document.getElementById("precio").value
    let precioTotal = cantidad * precio;
    let precioFormateado = precioTotal.toFixed(2) + "€";
    document.getElementById("precio").innerHTML = precioFormateado;
  } 