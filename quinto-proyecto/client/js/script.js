let btn_mostrar = document.getElementById("btnMostar");
btn_mostrar.addEventListener( "click", mostrarDatos);
console.log("porque no funciona :(");

async function mostrarDatos(){
    console.log("porque no funciona :( X2")

    let res = await fetch('api/pista/mostrarPista');
    console.log("porque no funciona :( X3")

    let data = await  res.json();
    console.log("porque no funciona :( X4")


    document.getElementById("idPista").innerHTML = data.titulo;
    console.log("porque no funciona :( X5")

    console.log(data.titulo);
}
/*
async function crearPista(){
     
    formulario = document.getElementById("idForm");

    

    res = await fetch('api/pista/crear', data);
}
*/
