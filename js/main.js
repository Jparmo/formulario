let nombre = document.getElementById("uno");
let apellido = document.getElementById("dos");
let id = document.getElementById("tres");
let sexo = document.getElementById("cuatro");
let pais = document.getElementById("cinco");
let lista = [];

function infoForm(nombre, apellido, id, sexo, pais) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.id = id;
  this.sexo = sexo;
  this.pais = pais;
}

const limpiar = () => {
  nombre.value = "";
  apellido.value = "";
  id.value = "";
  sexo.value = "";
  pais.value = "";
};

function sendForms() {
  let informacion = new infoForm(
    nombre.value,
    apellido.value,
    id.value,
    sexo.value,
    pais.value
  );
  console.log(informacion);
  lista.push(informacion);
  limpiar();
  return informacion;
}

const enviar = document.getElementById("enviar");
enviar.addEventListener("click", sendForms);
