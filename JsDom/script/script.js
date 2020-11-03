let title = document.querySelector(".title");
let description = document.querySelector(".text");

function setTitle(text){
  return title.innerHTML = text;
};
function setDescription(text){
  return description.innerHTML = text;
};
function teAmoMucho(text){
  return title.innerHTML = "Amore mio sos todo en mi vida te quiero para siempre";
};

setTitle("hola amor, te amo con mi vida");

setDescription("todo el dia estudiando para estar con mi amada.");

title.addEventListener("click", teAmoMucho)

