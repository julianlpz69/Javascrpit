import {postPersonas,getPersona,deletePersonas,ActualizarPersona} from "./peticiones.js"

let form = document.querySelector('#form');
let btnListar = document.querySelector('#btnListar');
let tbodyPersonas = document.querySelector('#tbodyPersonas');
let formActualizar = document.querySelector('#formActualizar');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.target));
    
    let accion = e.submitter.dataset.accion

    if (accion === "Registrar"){
        postPersonas(data)
    }

});

btnListar.addEventListener('click', async (e) => {
    e.preventDefault();
    let accion = e.currentTarget.dataset.accion;
    console.log(e.currentTarget.dataset.accion)

    if(accion === "Listar"){
        getPersona();
    }
});

tbodyPersonas.addEventListener('click', (e) => {
    e.preventDefault();

    let tr = e.target.closest("tr");
    let id = tr.id;

    let accion = e.target.dataset.accion;
    
    if(accion === "Eliminar"){
        deletePersonas(tr,id);
        tr.remove();
    }
    else if(accion === "Actualizar"){
      formActualizar.addEventListener("submit", (e) => {
        e.preventDefault();

        let data = Object.fromEntries(new FormData(e.target));

        ActualizarPersona(data,id);
      });
    }
});



