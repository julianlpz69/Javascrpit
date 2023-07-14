import {mostrarPersona,mostrarOpciones,mostrarPuntos} from "./mostrar.js"


let formRuta = document.getElementById("formRuta");
let formularioAgregarPunto = document.getElementById("formularioAgregarPunto");

let formularioEditarRuta = document.getElementById("formularioEditarRuta");
let tbodyRutas = document.getElementById("tbodyRutas");
let btnPuntos = document.getElementById("btnPuntos");



let btnEliminar = document.getElementById("btnEliminar");
const headers = new Headers ({'Content-Type': 'application/json'});




// --------------------------- Agregar Ruta -----------------------------------------


formRuta.addEventListener('submit', (e) => {
    e.preventDefault();


    let data = Object.fromEntries(new FormData(e.target));
    postPersonas(data)
    formRuta.reset()
    getPersona()


});

async function postPersonas(data){

    try{
        let config = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        };
        console.log(JSON.stringify(data))
        await fetch(`http://localhost:3000/Rutas`,config)
    }
    
    catch(err){
        console.log(err)
    }
    }






    // --------------------------- Agregar Puntos -----------------------------------------


    formularioAgregarPunto.addEventListener('submit', (e) => {
  e.preventDefault();


  let data = Object.fromEntries(new FormData(e.target));
  data.RutaId
  postRuta(data)
  formularioAgregarPunto.reset()
  mostrarPuntos()


});

async function postRuta(data){

  try{
      let config = {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(data)
      };
      console.log(JSON.stringify(data))
      await fetch(`http://localhost:3000/Puntos`,config)
  }
  
  catch(err){
      console.log(err)
  }
  }
    



// --------------------------- Mostrar Ruta -----------------------------------------


async function getPersona(){
    let data = await (await fetch(`http://localhost:3000/Rutas`)).json();
    mostrarPersona(data);
    mostrarOpciones(data)
}
getPersona()



btnPuntos.addEventListener('click', (e) => {
  mostrarPuntos()

});








// --------------------------- Editar Ruta -----------------------------------------

async function ActualizarPersona(data,id) {



  let config = {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(data)
  }

  await (await fetch(`http://localhost:3000/Rutas/${id}`,config)).json();
}


tbodyRutas.addEventListener('click', async (e) => {

  
  let tr = e.target.closest("tr");
  let id = tr.id;

  console.log(id)

  

    if(e.target.dataset.accion == "Actualizar"){

      formularioEditarRuta.addEventListener("submit", (e) => {
        e.preventDefault();

       

        let data = Object.fromEntries(new FormData(e.target));

        console.log(data)
        ActualizarPersona(data,id);
      }
    
  
  
)}})

 









// --------------------------- Eliminar Ruta -----------------------------------------

async function deletePersonas(id){

    let config = {
        method: 'DELETE',
        headers: headers};

await(await fetch(`http://localhost:3000/Rutas/${id}`,config)).json();
}

document.addEventListener('click', async (e) => {

    if(e.target.classList.contains("btn-eliminar")){


        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: '¿Estas Seguro?',
            text: "Despues de borrar esta ruta no podras recuperarla",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Eliminar!',
            cancelButtonText: 'No, cancelar!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                setTimeout(() => {
                    const rutaId = e.target.getAttribute("data-id");
                    deletePersonas(rutaId);
                    getPersona()
                    }, 1000);
              swalWithBootstrapButtons.fire(
                'Eliminado!',
                'Proceso realizado Correctamente',
                'success',
              )
            } 
            
          })

        
    }})


