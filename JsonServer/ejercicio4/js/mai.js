import {mostrarPersona} from "./mostrar.js"


let formRuta = document.getElementById("formRuta");
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



// --------------------------- Mostrar Ruta -----------------------------------------


async function getPersona(){
    let data = await (await fetch(`http://localhost:3000/Rutas`)).json();
    mostrarPersona(data);
}
getPersona()


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
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                setTimeout(() => {
                    const rutaId = e.target.getAttribute("data-id");
                    deletePersonas(rutaId);
                    getPersona()
                    }, 1000);
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })

        
    }})


