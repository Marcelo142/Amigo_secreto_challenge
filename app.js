//Es el array para que se guarden los amigos
let amigo = [];
//Funcion para agregar un amigo
//Se crea una variable para que se pueda ingresar el nombre del amigo
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreamigo = inputAmigo.value;
//Se crea una condicion para que no se pueda ingresar un amigo sin nombre
    if (nombreamigo === "") {
        alert("Debes poner un nombre bro");
        return;
    }
//Se agrega el nombre del amigo al array
//Se limpia el input para que se pueda ingresar otro amigo
    amigo.push(nombreamigo);
    inputAmigo.value = "";
    cargarAmigos();
}
//Funcion para cargar los amigos osea que se vayan ingresando en la parte de abajo
//de la pagina
function cargarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
//Ciclo para que se vayan ingresando los amigos
    for (let i = 0; i < amigo.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}
//Funcion para que se realice el sorteo del amigo secreto
function sorteo_del_Amigo() {
    if (amigo.length === 0) {
        alert("Debe ingresar al menos un amigo");
        return;
    }
//Se crea una variable para que se pueda realizar el sorteo
    let indiceSorteado = Math.floor(Math.random() * amigo.length);
    let amigoSorteado = amigo[indiceSorteado];
    document.getElementById("resultado").innerHTML = "Tu amigo secreto es: " + amigoSorteado;
    document.getElementById("listaAmigos").innerHTML = "";
}