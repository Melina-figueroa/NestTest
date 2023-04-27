let btnSaludo = document.getElementById("saludoIngles");
btnSaludo.addEventListener("click", saludarIngles);

let btnSaludoEspanol = document.getElementById("saludoEspanol");
btnSaludoEspanol.addEventListener("click", saludarEspanol);

async function saludarIngles() {
    const respuesta = fetch('/api/saludoIngles');
    const datos = await respuesta;    
    console.log(datos);


    let html = "";
    html = await datos.json();
    console.log(html.saludo);

    document.querySelector("#saludo").innerHTML = html.saludo;

}
async function saludarEspanol() {
    const respuesta = fetch('/api/saludoEspanol');
    const datos = await respuesta;    
    console.log(datos);


    let html = "";
    html = await datos.json();
    console.log(html.saludo);
    
    document.querySelector("#saludo").innerHTML = html.saludo;

}

