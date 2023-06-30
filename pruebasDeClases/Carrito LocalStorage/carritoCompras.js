const nombreProducto = document.getElementById("nombreProducto");
const precioProducto = document.getElementById("precioProducto");
const lugarProductos = document.getElementById("lugarProductos");
const lugarFactura = document.getElementById("lugarFactura");
const lugarTotal = document.getElementById("lugarTotal");

class Carrito{
    constructor(){
        this.lista = []   
    }

    agregar(producto) {

        const productos = JSON.parse(localStorage.getItem("list"))
        if (productos != null){
            this.lista = productos
            this.lista.push(producto)
            localStorage.setItem("list",JSON.stringify(this.lista))
        }

        else{
            this.lista.push(producto)
            localStorage.setItem("list",JSON.stringify(this.lista))
        }}
    
    eliminarTodo() {
        this.lista = []
        localStorage.clear()
        lugarProductos.innerHTML = ""
    }

    eliminarProducto(indice){
        const productos = JSON.parse(localStorage.getItem("list"))
        productos.splice(indice, 1)
        localStorage.setItem("list",JSON.stringify(productos))
        mostrar()
    }

    devolver() {
        return JSON.parse(localStorage.getItem("list"));
    }
    }



const carrito = new Carrito

function agregarProducto(){
const nombre = nombreProducto.value
const precio = precioProducto.value

if (nombre == ""){
    alert("Digite Un Nombre")
}

else if (precio == ""){
    alert("Digite un Precio Valido")
}

else{
    const producto = [nombre,precio]
    carrito.agregar(producto)
    nombreProducto.value = ""
    precioProducto.value = ""
    mostrar()
}}





function mostrar() {
    lugarProductos.innerHTML = "";

    const lista = carrito.devolver()

    for (let i = 0; i < lista.length; i++) {

        const quiz2 = document.createElement("div");
        quiz2.classList = ("col-3 m-5 text-center align-items-center border border-5 border-black")
        quiz2.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="pink" class="bi bi-bag-heart-fill" viewBox="0 0 16 16">
            <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
          </svg>
        <div class="card-body">
            <br>
          <p class="card-text fs-4 fw-bold">${lista[i][0]}</p>
          <p class="card-text fs-4 fw-bold">${lista[i][1]}</p>
          <td><button onClick="carrito.eliminarProducto(${i})" type="button"  class="btn btn-black"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="pink" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/> <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/></svg></button></td>            
        </div>`;
        lugarProductos.appendChild(quiz2);}}  


function factura(){

    let contador = 0
    const productos = JSON.parse(localStorage.getItem("list"))
    lugarFactura.innerHTML=""


    if (productos == null){
        alert("No hay Productos en el carrito")} 

    else if (productos.length == 0){
        alert("No hay Productos en el carrito")}
    
    else{
        console.log(productos)
        for (let i = 0; i < productos.length; i++) {

            const quiz2 = document.createElement("ul");
            quiz2.innerHTML = `
                    <li>${productos[i][0]} --- ${productos[i][1]}</li>`;

            contador = contador + Number(productos[i][1])
            lugarFactura.appendChild(quiz2);}
        
    

    const quiz2 = document.createElement("div");

    quiz2.innerHTML=`<br>
    <p class="text-center fs-4 fw-bold">Total compra --- ${contador}</p>`

    lugarFactura.appendChild(quiz2)
    $('#facturaServicio').modal('show')}}



const productos = JSON.parse(localStorage.getItem("list"))
if (productos != null){mostrar()}