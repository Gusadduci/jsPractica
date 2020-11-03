let title = document.querySelector(".title");
let description = document.querySelector(".text");

function setTitle(text){
  return title.innerHTML = text;
};
function setDescription(text){
  return description.innerHTML = text;
};
function teCorrijo(text){
  return title.innerHTML = "vamos a corregir el tp";
};

setTitle("hola señor, como esta ?");

setDescription("hola tucu corregime porfa !.");

title.addEventListener("click", teCorrijoW)

