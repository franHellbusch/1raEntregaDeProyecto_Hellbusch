// definiendo variables
let nombre;
let apellido;

const productos = [];
let carrito = "";
let total = 0;
const todosProductos = [];
let catalogo = "";
let ganador = "Campera de abrigo";
let mensajeGanador = "";
// definiendo funcion de bienvenida
function bienvenida() {
    nombre = prompt("Ingrese su nombre");
    apellido = prompt("Ingrese su apellido");
    if ((nombre == "") || (apellido == "")) {
        alert("Debe completar ambos campos: Nombre y Apellido");
        bienvenida()
    } else {
        let mensaje = `Bienvenido ${nombre} ${apellido}, a una de las tiendas mas llamativas de ropa en Argentina! A continuacion podra realizar su compra.`;
        alert(mensaje);
    }
}

class nuevoProducto{
    constructor(id, nombre, precio){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.vendido = false
    }
    vendido(){
        this.vendido = true
    }
}

const remera1 = new nuevoProducto (1, "Remera mangas cortas", 2500);
const remera2 = new nuevoProducto (2, "Remera musculosa", 2100);
const remera3 = new nuevoProducto (3, "Remera mangas largas", 1900);

const pantalon1 = new nuevoProducto (4, "Pantalon corto", 2000);
const pantalon2 = new nuevoProducto (5, "Pantalon de jean", 2800);
const pantalon3 = new nuevoProducto (6, "Pantalon jogging", 2500);

const buzo1 = new nuevoProducto (7, "buzo con capucha", 4000);
const buzo2 = new nuevoProducto (8, "buzo sin capucha", 3500);

function remeras() {
    let entradaRemeras = prompt("Cual remera elije? \n 1| Remera con mangas cortas: $2500 \n 2| Remera musculosa: $2100 \n 3| Remera mangas largas:$1900 \n 4| Volver a menu de compra")
    if (entradaRemeras == "1") {
        alert("Eligio remera mangas cortas: con un precio de $2500")
        productos.push(remera1)
    } else if (entradaRemeras == "2") {
        alert("Eligio remera musculosa: con un precio de $2100")
        productos.push(remera2)
    } else if (entradaRemeras == "3") {
        alert("Eligio remera mangas largas: con un precio de $1900")
        productos.push(remera3)
    } else if (entradaRemeras == "4") {
        compra()
    } else{
        alert("Error: ingrese un numero");
        remeras()
    }
}

// definiendo funcion de pantalones
function pantalones() {
    let entradaPantalones = prompt("Cual remera elije? \n 1| Pantalon corto: $2000 \n 2| Pantalon de jean: $2800 \n 3| Pantalon jogging: $2500 \n 4| Volver a menu de compra")
    if (entradaPantalones == "1") {
        alert("Eligio pantalon corto: con un precio de $2000")
        productos.push(pantalon1);
    } else if (entradaPantalones == "2") {
        alert("Eligio pantalon de jean: con un precio de $2800")
        productos.push(pantalon2);
    } else if (entradaPantalones == "3") {
        alert("Eligio pantalon jogging: con un precio de $2500")
        productos.push(pantalon3);
    } else if (entradaPantalones == "4") {
        compra()
    } else {
        alert("Error: ingrese un numero");
        pantalones()
    }
}

// definiendo funcion de buzos
function buzos() {
    let entradaBuzos = prompt("Cual remera elije? \n 1| Buzo con capucha: $4000 \n 2| Buzo sin capucha: $3500 \n 3| Volver a menu de compra")
    if(entradaBuzos == "1"){
        alert("Eligio buzo con capucha: con un precio de $4000")
        productos.push(buzo1);
    } else if (entradaBuzos == "2") {
        alert("Eligio buzo sin capucha: con un precio de $3500")
        productos.push(buzo2);
    } else if (entradaBuzos == "3"){
        compra()
    } else {
        alert("Error: ingrese un numero");
        buzos()
    } 
}

// definiendo funcion de todos los productos
todosProductos.push(remera1, remera2, remera3, pantalon1, pantalon2, pantalon3, buzo1, buzo2);
function ordenarProductos() {
    for (i = 0; i < todosProductos.length; i++){
        catalogo += `Nombre: ${todosProductos[i].nombre}, Precio: ${todosProductos[i].precio} ID: ${todosProductos[i].id} Posicion: ${i}\n`;
    }
}

function todosLosProductos() {
    let entradaProductos = prompt(catalogo + "\n1| Ordenar de mayor a menor precio\n2| Ordenar de menor a mayor precio\n3| Volver al menu de compra");
    if (entradaProductos == "1"){
        todosProductos.sort((a, b) => b.precio - a.precio);
        catalogo = ""
        ordenarProductos();
        todosLosProductos()
    } else if (entradaProductos == "2"){
        todosProductos.sort((a, b) => a.precio - b.precio);
        catalogo = ""
        ordenarProductos();
        todosLosProductos()
    } else if (entradaProductos == "3"){
        compra()
    } else {
        alert("Error: ingrese un numero");
        todosLosProductos()
    }
}

// definiendo funcion de sorteo
function sorteo() {
    alert("Esta participando por el sorteo de una campera de abrigo, el sorteo conciste en un numero aleatorio del 1 al 10, en caso del numero ser 2 o 9 usted ganara, SUERTE!! \nPresione aceptar para realizar el sorteo");
    alert("realizando sorteo...");
    let numero = Math.round(Math.random() * 10);
    if (numero == 2 || numero == 9) {
        alert(`GANO EL SORTEO: Su numero es ${numero} \nSe guardo su producto, debe comprar algo para que se efectue el envio del sorteo`);
        return mensajeGanador = `\nSorteo: ${ganador}`;
    } else {
        alert(`No obtuvo ningun premio siga participando: su numero es ${numero}`);
    }
    compra()
}

// definiendo funcion de compra
function compra(){
    let entrada1 = prompt("Nuestro catalogo muestra estos productos, cual desea comprar? \n 1| Remeras \n 2| Pantalones \n 3| Buzos \n 4| Mostrar todos los productos \n 5| Sorteo\n 6| Ver carrito/salir");
    if (entrada1 == "1") {
        remeras();
    } else if (entrada1 == "2"){
        pantalones()
    } else if (entrada1 == "3") {
        buzos()
    } else if (entrada1 == "4") {
        ordenarProductos()
        todosLosProductos()
    } else if (entrada1 == "5") {
        sorteo()
    } else if (entrada1 == "6") {
        alert("no se agrego nada a su carrito");
    } else {
        alert("Error: ingrese un numero");
        compra();
    }
}

// definiendo funcion de carrito
function carritoCompra() {
    for (i = 0; i < productos.length; i++){
        carrito += `Nombre: ${productos[i].nombre}, Precio: ${productos[i].precio} ID: ${productos[i].id} Posicion: ${i}\n`;
    }
    total = productos.reduce((acc, el) => acc + el.precio, 0);
}

// definiendo funcion continuar
function continuar() {
let preguntar = prompt("Quiere comprar otro producto?\nNO| Ver carrito/salir \nSI| Volver al menu de compra")
    if ((preguntar == "no") || (preguntar == "NO")) {
        carritoCompra();
        verCarrito(carrito)
    } else if ((preguntar == "si") || (preguntar == "SI")){
        compra()
        continuar()
    } else {
        alert("Error: ingrese SI o NO");
        continuar()
    }
}

// edicion del carrito
function edicion (){
    if (productos.length === 0) {
        continuar()
    } else {
        editarCarrito()
    }
}

// definiendo la funcion editar carrito
function editarCarrito() {
    let editar = prompt(`Indique la posicion del elemento que quieres eliminar:\n${carrito}Y el total de compra es: ${total}\nPara cancelar ingrese ESC.`);
    if ((editar == "esc") || (editar == "ESC")) {
        finalizar()
    } else if ((editar > productos.length) || (editar = "0")){
        productos.splice(editar, 1);
        carrito = ""
        carritoCompra()
        edicion()
    } else {
        alert("Esta posicion no existe")
        editarCarrito()
    } 
}

// realizar compra
function compraRealizada() {
    if (productos.length === 0) {
        alert("No a realizado ninguna compra, gracias por su visita")
    } else {
        alert("Su compra fue realizada con exito, con un total de $" + total + ", vuelva mas tarde.")
    }
}
// definiendo la funcion finalizar
function finalizar() {
    let preguantaFinal = prompt("Desea cambiar algun producto del carrito?\nNO| Ralizar compra\nSI| Editar carrito");
    if ((preguantaFinal == "no") || (preguantaFinal == "NO")) {
        compraRealizada()
    } else if ((preguantaFinal == "si") || (preguantaFinal == "SI")){
        editarCarrito()
    } else {
        alert("Error: ingrese SI o NO");
        finalizar()
    }
}

// definiendo la funcion de verCarrito
function verCarrito(compra) {
    if (productos.length === 0){
        compraRealizada()
    }else{
        alert(`Su carrito contiene los siguientes productos: \n${compra}\nY el total es: $${total}${mensajeGanador}\nProsiga con su compra.`);
        finalizar()
    }
}

bienvenida()
compra()
continuar()