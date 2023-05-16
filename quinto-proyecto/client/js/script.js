let btn_mostrar = document.getElementById("btnMostar");
btn_mostrar.addEventListener( "click", mostrarDatos);
/*
let btn_crear = document.getElementById("btnCrear");
btn_mostrar.addEventListener( "click", crearPista);*/

async function mostrarDatos(){
    let res = await fetch('api/pista/pistas');
    let data = await  res.json();


    document.getElementById("idPista").innerHTML = data.titulo;
    console.log(data.pistas);
}
/*
async function crearPista(){
     
    formulario = document.getElementById("idForm");

    

    res = await fetch('api/pista/crear', data);
}
*/
