function reset(formulario){
    formulario.reset()
}
const lugar = document.getElementById("listaClientes")
const formularioeditar = document.getElementById("formularioEditarQuiz")
const btnConfirmarEditar = document.getElementById("btnConfirmarEditar")



class preguntas {
    constructor(pregunta,opcion1,opcion2,opcion3,opcion4,OpcionCorrecta){
        this.pregunta = pregunta;
        this.opcion1 = opcion1
        this.opcion2 = opcion2
        this.opcion3 = opcion3
        this.opcion4 = opcion4
        this.OpcionCorrecta = OpcionCorrecta
    }
}

class crearlista {
        constructor() {
            this.lista = [];
}
agregarPregunta(task) {
        this.lista.push(task);
}
eliminarPregunta(index) {
    this.lista.splice(index, 1);
}

cambiarPregunta(index,valor) {
  this.lista[index]= valor;
}
    
verLista() {
        return this.lista;
}}



  // Crear instancia del administrador de tareas
  const lista = new crearlista();
  
  // Lógica de interacción con el DOM
  const datoPregunta = document.getElementById("datoPregunta");
  const datoOpcion1 = document.getElementById("datoOpcion1");
  const datoOpcion2 = document.getElementById("datoOpcion2");
  const datoOpcion3 = document.getElementById("datoOpcion3");
  const datoOpcion4 = document.getElementById("datoOpcion4");
  const datoOpcionCorecta = document.getElementById("datoOpcionCorecta");
  const lugarPreguntas = document.getElementById("lugarPreguntas");
  const formularioQuiz2 = document.getElementById("formularioQuiz2");
  
  formularioQuiz2.addEventListener("submit", (e) => {
    e.preventDefault();
    const pregunta = datoPregunta.value;
    const opcion1 = datoOpcion1.value;
    const opcion2 = datoOpcion2.value;
    const opcion3 = datoOpcion3.value;
    const opcion4 = datoOpcion4.value;
    const OpcionCorrecta = datoOpcionCorecta.value;

    if (OpcionCorrecta == "0"){
      alert("Elige una opcion Correcta")
    }

    else{
    const nuevaPregunta = new preguntas(pregunta,opcion1,opcion2,opcion3,opcion4,OpcionCorrecta);
    lista.agregarPregunta(nuevaPregunta);
    console.log(lista)
    enviarPregunta();
    formularioQuiz2.reset();
    }
  });
  
  function enviarPregunta() {
    lugarPreguntas.innerHTML = "";
    const pregunta = lista.verLista();
    for (let i = 0; i < pregunta.length; i++) {
      const preguntas = pregunta[i];
      const listItem = document.createElement("li");
      listItem.innerHTML = `
      <div class="mx-5 mt-5">
      <p class="fs-3" >${preguntas.pregunta}</p>
  </div>
  <div class="mx-5">
      <div class="form-check fs-4">
          <input class="form-check-input" type="radio" name="flexRadioDefault${i}" id="input1${i}">
          <label class="form-check-label" for="flexRadioDefault${i}">
          ${preguntas.opcion1}
          </label>
        </div>
        <div class="form-check fs-4">
          <input class="form-check-input" type="radio" name="flexRadioDefault${i}" id="input2${i}">
          <label class="form-check-label" for="flexRadioDefault${i}">
          ${preguntas.opcion2}              
          </label>
        </div>
        <div class="form-check fs-4">
          <input class="form-check-input" type="radio" name="flexRadioDefault${i}" id="input3${i}">
          <label class="form-check-label" for="flexRadioDefault${i}">
          ${preguntas.opcion3}               
          </label>
        </div>
        <div class="form-check fs-4">
          <input class="form-check-input" type="radio" name="flexRadioDefault${i}" id="input4${i}">
          <label class="form-check-label" for="flexRadioDefault${i}">
          ${preguntas.opcion4}                
          </label>
        </div>
  </div>
  <div><button data-bs-toggle="modal" data-bs-target="#formularioEditarClientes2" type="button" onClick="btnEditar(${i})" class="btn btn-black"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#000" class="bi bi-clipboard2-pulse" viewBox="0 0 16 16"><path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/><path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"/><path d="M9.979 5.356a.5.5 0 0 0-.968.04L7.92 10.49l-.94-3.135a.5.5 0 0 0-.926-.08L4.69 10H4.5a.5.5 0 0 0 0 1H5a.5.5 0 0 0 .447-.276l.936-1.873 1.138 3.793a.5.5 0 0 0 .968-.04L9.58 7.51l.94 3.135A.5.5 0 0 0 11 11h.5a.5.5 0 0 0 0-1h-.128L9.979 5.356Z"/></svg></button></div>
  <div><button onClick="btnDelete(${i})" type="button" class="btn btn-black"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#000" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/> <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/></svg></button></div>                `;
      lugarPreguntas.appendChild(listItem);    }

    const listItems = document.createElement("div");
    listItems.innerHTML = `<button class="fs-3 w-100 text-center bg-success text-white fw-bold rounded border border-4" id="btnConfirmarRespuestas" type="submit">Confirmar</button>`
    lugarPreguntas.appendChild(listItems);
    $('#formularioQuiz').modal('hide')



  }


function btnDelete(button) {
  let confirmar = confirm("¿Estas seguro de eliminar estos Datos?")
  if (confirmar==true){
    lista.eliminarPregunta(button);
    enviarPregunta();
  }}
  
  
  function btnEditar(ids) {

    const pregunta = lista.verLista()

 
    document.getElementById("datoPreguntaEditar").value = pregunta[ids]["pregunta"];
    document.getElementById("datoEditar1").value = pregunta[ids]["opcion1"];
    document.getElementById("datoEditar2").value = pregunta[ids]["opcion2"];
    document.getElementById("datoEditar3").value = pregunta[ids]["opcion3"];
    document.getElementById("datoEditar4").value = pregunta[ids]["opcion4"];
    document.getElementById("datoOpcionCorectaEditar").value =pregunta[ids]["OpcionCorrecta"];
    document.getElementById("datoOculto").value = ids;


    $('#formularioEditarQuiz').modal('show')
  
  }
  
  function Editar() {

    formularioeditar.addEventListener("submit", function(event) {
      event.preventDefault();
 
    const pregunta = document.getElementById("datoPreguntaEditar").value;
    const opcion1 = document.getElementById("datoEditar1").value ;
    const opcion2 =document.getElementById("datoEditar2").value;
    const opcion3 =document.getElementById("datoEditar3").value;
    const opcion4 =document.getElementById("datoEditar4").value;
    const OpcionCorrecta =document.getElementById("datoOpcionCorectaEditar").value;
    const datoOculto =document.getElementById("datoOculto").value;



    if (OpcionCorrecta == "0"){
      alert("Elige una opcion Correcta")
    }

    else{
      const editar = new preguntas(pregunta,opcion1,opcion2,opcion3,opcion4,OpcionCorrecta);

      lista.cambiarPregunta(datoOculto,editar)
      console.log(lista)
      enviarPregunta()
      $('#formularioEditarQuiz').modal('hide')
    }
  })}
  

  btnConfirmarEditar.addEventListener("submit",Editar())
