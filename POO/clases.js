function reset(formulario){
    formulario.reset()
}
const lugar = document.getElementById("listaClientes")



class quizz {
    constructor(pregunta,opcion1,opcion2,opcion3,opcion4,opcion4Correcta){
        this.pregunta = pregunta;
        this.opcion1 = opcion1
        this.opcion2 = opcion2
        this.opcion3 = opcion3
        this.opcion4 = opcion4
        this.opcion4Correcta = opcion4Correcta
    }
}

class crearlista {
        constructor() {
            this.lista = [];
}
addTask(task) {
        this.lista.push(task);
}
removeTask(index) {
    this.tasks.splice(index, 1);
}
    
getTasks() {
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
    const OpcionCorecta = datoOpcionCorecta.value;
    const nuevaPregunta = new quizz(pregunta, opcion1, opcion2,opcion3,opcion4,OpcionCorecta);
    lista.addTask(nuevaPregunta);
    console.log(lista)
    enviarPregunta();
    formularioQuiz2.reset();
  });
  
  function enviarPregunta() {
    lugarPreguntas.innerHTML = "";
    const pregunta = lista.getTasks();
    for (let i = 0; i < pregunta.length; i++) {
      const preguntas = pregunta[i];
      const listItem = document.createElement("li");
      listItem.innerHTML = `
      <div class="mx-5 mt-5">
      <p class="fs-3" >${preguntas.pregunta}</p>
  </div>
  <div class="mx-5">
      <div class="form-check fs-4">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
          <label class="form-check-label" for="flexRadioDefault1">
          ${preguntas.opcion1}
          </label>
        </div>
        <div class="form-check fs-4">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
          <label class="form-check-label" for="flexRadioDefault2">
          ${preguntas.opcion2}              
          </label>
        </div>
        <div class="form-check fs-4">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
          <label class="form-check-label" for="flexRadioDefault2">
          ${preguntas.opcion3}               
          </label>
        </div>
        <div class="form-check fs-4">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
          <label class="form-check-label" for="flexRadioDefault2">
          ${preguntas.opcion4}                
          </label>
        </div>
  </div>
      `;
      lugarPreguntas.appendChild(listItem);
      $('#formularioQuiz').modal('hide')
    }
  }
  
  

  