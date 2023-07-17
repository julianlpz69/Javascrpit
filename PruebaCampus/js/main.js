//---------------------------------- Tema de La PAgina -------------------------------------------------

const body = document.querySelector('body'),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text"),
      tablasLight = body.querySelector(".tablasLight"),
      textoTema = document.getElementById("textoTema");

      body.classList.add("light");



if(localStorage.getItem("tema")=="dark"){
    textoTema.innerText = "Light mode"
    body.classList.add("dark");
    body.classList.remove("light");
    localStorage.setItem("tema","dark")
}
if(localStorage.getItem("tema")=="light"){
    textoTema.innerText = "Dark mode"
    localStorage.setItem("tema","light")

}
if(localStorage.getItem("tema")==null){
    textoTema.innerText = "Dark mode"
    localStorage.setItem("tema","light")
}
    

function tema(){
    if(localStorage.getItem("tema")=="light"){
        body.classList.remove("light");
        body.classList.add("dark");
        localStorage.setItem("tema","dark")
    }

    else if(localStorage.getItem("tema")=="dark"){
        body.classList.remove("dark");
        body.classList.add("light");
        localStorage.setItem("tema","light")
    }

    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
    }}

modeSwitch.addEventListener("click" , () =>{
    tema()
});





// ----------------------------------- Navar ------------------------------------------------------------------


const navHome = document.getElementById("navHome"),
        nav1 =  document.getElementById("navOpcion1"), 
        nav2 =  document.getElementById("navOpcion2"), 
        nav3 =  document.getElementById("navOpcion3"), 
        paginaHome =  document.getElementById("home"), 
        pagina1 =  document.getElementById("Opcion1"), 
        pagina2 =  document.getElementById("Opcion2"), 
        pagina3 =  document.getElementById("Opcion3");



function ocultar(parametroBtn,parametro1,parametro2,parametro3,parametro4){
    parametroBtn.addEventListener('click', function() {
        parametro1.classList.remove('d-none');
        parametro2.classList.add('d-none');
        parametro3.classList.add('d-none');
        parametro4.classList.add('d-none');
    })}

ocultar(navHome,paginaHome,pagina1,pagina2,pagina3)
ocultar(nav1,pagina1,paginaHome,pagina2,pagina3)
ocultar(nav2,pagina2,pagina1,paginaHome,pagina3)
ocultar(nav3,pagina3,pagina1,pagina2,paginaHome)