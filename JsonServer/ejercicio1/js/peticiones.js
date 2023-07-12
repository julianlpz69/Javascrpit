import  mostrarPersona from "./mostrarPersona.js";

const URL = "C"
const headers = new Headers ({'Content-Type': 'application/json'});

export async function getPersona(){
    let data = await (await fetch(`${URL}/persona`)).json();
    mostrarPersona(data);
}


export async function postPersonas(data){
    let config = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    }

    let personas = await (await fetch(`${URL}/persona`,config)).json();

}

export async function deletePersonas(tr,id){

    let data = Object.fromEntries(new FormData(tr.target));

    let config = {
        method: 'DELETE',
        headers: headers,
        body: JSON.stringify(data)
    };

    let del = await(await fetch(`${URL}/persona/${id}`,config)).json();
}

export async function ActualizarPersona(data,id) {

    let config = {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(data)
    }

    let act = await (await fetch(`${URL}/persona/${id}`,config)).json();
}