function reset(formulario){
    formulario.reset()
}


const formularioEditarQuiz2 = document.getElementById("formularioEditarQuiz2");
const datoPreguntaEditar = document.getElementById("datoPreguntaEditar");
const datoEditar1 = document.getElementById("datoEditar1")
const datoEditar2 = document.getElementById("datoEditar2")
const datoEditar3 = document.getElementById("datoEditar3")
const datoEditar4 = document.getElementById("datoEditar4")
const datoOpcionCorectaEditar = document.getElementById("datoOpcionCorectaEditar")


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
            this.editatando = null;
}
addTask(preguntasss) {
  if (this.editatando) {
    console.log(this.editatando)
    const indice = this.lista.indexOf(this.editatando);
    this.lista[indice] = preguntasss;
    this.editatando = null;
  } else {
    this.lista.push(preguntasss)
    console.log(lista);
}}
removeTask(index) {
    this.lista.splice(index, 1);
}

cambiar(index,valor) {
  this.lista[index]= valor;
}
    
getTasks() {
        return this.lista;
}

editar(indice){

  this.editatando = this.lista[indice];

  datoPreguntaEditar.value = this.editatando.pregunta;
  datoEditar1.value = this.editatando.opcion1;
  datoEditar2.value = this.editatando.opcion2;
  datoEditar3.value = this.editatando.opcion3;
  datoEditar4.value = this.editatando.opcion4;
  datoOpcionCorectaEditar.value = this.editatando.OpcionCorrecta;


  $('#quiz').modal('hide')

  $('#formularioEditarQuiz').modal('show')

}

}




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
  const lugarQuiz = document.getElementById("lugarQuiz");

  const formularioQuiz2 = document.getElementById("formularioQuiz2");
  const lugar = document.getElementById("listaClientes")
  const lugbtnConfirmarRespuestasr = document.getElementById("btnConfirmarRespuestas")
  
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
    lista.addTask(nuevaPregunta);
    console.log(lista)
    enviarPregunta();
    formularioQuiz2.reset();
    }
  });
  
  function enviarPregunta() {
    lugarPreguntas.innerHTML = "";
    lugarQuiz.innerHTML = "";

    const pregunta = lista.getTasks();
    for (let i = 0; i < pregunta.length; i++) {

      const preguntas = pregunta[i];
      const quiz2 = document.createElement("li");
      quiz2.innerHTML = `
      <div class="mx-5 mt-5">
      <p class="fs-3" >${preguntas.pregunta}</p>
  </div>
  <div class="mx-5">
      <div class="form-check fs-4">
          <input class="form-check-input" type="radio" value="1" name="flexRadioDefault${i}" id="input1${i}">
          <label class="form-check-label" for="flexRadioDefault${i}">
          ${preguntas.opcion1}
          </label>
        </div>
        <div class="form-check fs-4">
          <input class="form-check-input" type="radio" value="2" name="flexRadioDefault${i}" id="input2${i}">
          <label class="form-check-label" for="flexRadioDefault${i}">
          ${preguntas.opcion2}              
          </label>
        </div>
        <div class="form-check fs-4">
          <input class="form-check-input" type="radio" value="3" name="flexRadioDefault${i}" id="input3${i}">
          <label class="form-check-label" for="flexRadioDefault${i}">
          ${preguntas.opcion3}               
          </label>
        </div>
        <div class="form-check fs-4">
          <input class="form-check-input" type="radio" value="4" name="flexRadioDefault${i}" id="input4${i}">
          <label class="form-check-label" for="flexRadioDefault${i}">
          ${preguntas.opcion4}                
          </label>
        </div>
  </div>`;
  lugarQuiz.appendChild(quiz2);    

      const listItem = document.createElement("li");
      listItem.innerHTML = `
      <div class="mx-5 mt-5">
      <p class="fs-3" >${preguntas.pregunta}</p>
  </div>
  <div class="mx-5">
      <div class="" fs-4">
          <label class="" for="flexRadioDefault${i}">
          ${preguntas.opcion1}
          </label>
        </div>
        <div class="" fs-4">
          <label class="" for="flexRadioDefault${i}">
          ${preguntas.opcion2}              
          </label>
        </div>
        <div class="" fs-4">
          <label class="" for="flexRadioDefault${i}">
          ${preguntas.opcion3}               
          </label>
        </div>
        <div class="" fs-4">
          <label class="" for="flexRadioDefault${i}">
          ${preguntas.opcion4}                
          </label>
        </div>
  </div>
  <div><button type="button" onClick="lista.editar(${i})" class="btn btn-black"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#000" class="bi bi-clipboard2-pulse" viewBox="0 0 16 16"><path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/><path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"/><path d="M9.979 5.356a.5.5 0 0 0-.968.04L7.92 10.49l-.94-3.135a.5.5 0 0 0-.926-.08L4.69 10H4.5a.5.5 0 0 0 0 1H5a.5.5 0 0 0 .447-.276l.936-1.873 1.138 3.793a.5.5 0 0 0 .968-.04L9.58 7.51l.94 3.135A.5.5 0 0 0 11 11h.5a.5.5 0 0 0 0-1h-.128L9.979 5.356Z"/></svg></button></div>
  <div><button onClick="btnDelete(${i})" type="button" class="btn btn-black"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#000" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/> <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/></svg></button></div>                `;
      lugarPreguntas.appendChild(listItem);    }

    const listItems = document.createElement("div");
    listItems.innerHTML = `<button onClick="confirmarQuizz()" class="fs-3 w-100 text-center bg-success text-white fw-bold rounded border border-4" id="btnConfirmarRespuestas" type="submit">Confirmar</button>`
    lugarQuiz.appendChild(listItems);
    $('#formularioQuiz').modal('hide')

    

  }


function btnDelete(button) {
  let confirmar = confirm("¿Estas seguro de eliminar estos Datos?")
  if (confirmar==true){
    lista.removeTask(button);
    enviarPregunta();
  }}
  




  
  
  
  formularioEditarQuiz2.addEventListener("submit", (e) => {
    e.preventDefault();
    const pregunta = datoPreguntaEditar.value;
    const opcion1 = datoEditar1.value;
    const opcion2 = datoEditar2.value;
    const opcion3 = datoEditar3.value;
    const opcion4 = datoEditar4.value;
    const OpcionCorrecta = datoOpcionCorectaEditar.value;

    if (OpcionCorrecta == "0"){
      alert("Elige una opcion Correcta")
    }

    else{
    const nuevaPregunta = new preguntas(pregunta,opcion1,opcion2,opcion3,opcion4,OpcionCorrecta);
    lista.addTask(nuevaPregunta);
    enviarPregunta();
    formularioEditarQuiz2.reset();
    }
  });


  function confirmarQuizz(){
    const lista2 = lista.getTasks()
    const cantidad = lista2.length

    let contador = 0

    for (let i = 0; i < cantidad; i++) {

      const input1 = document.getElementById(`input1${i}`)
      const input2 = document.getElementById(`input2${i}`)
      const input3 = document.getElementById(`input3${i}`)
      const input4 = document.getElementById(`input4${i}`)


      if (input1.checked && input1.value ==lista2[i].OpcionCorrecta) {

        contador++;
      } 
      
      else if (input2.checked  && input2.value ==lista2[i].OpcionCorrecta) {

        contador++;

      } 
      
      else if (input3.checked  && input3.value ==lista2[i].OpcionCorrecta) {
        contador++;

      } 

      else if (input4.checked  && input4.value ==lista2[i].OpcionCorrecta) {
        contador++;

      } 
    }

    const lugarRespuesta = document.getElementById("lugarRespuesta");

    lugarRespuesta.textContent=`su putaje fue de ${contador}/${cantidad}`

  }
  