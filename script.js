let slide= [
  {
    imagen:"img/banner1.png",
    linkImagen:"contacto.html",
  },
  {
    imagen:"img/banner2.png",
    linkImagen:"index.html",
  }
];
let pos=0;
mostrar();
function mostrar(){
    document.getElementById("pic").src = slide[pos].imagen;
    document.getElementById("linkImg").href=slide[pos].linkImagen;
}
function siguiente(){
    if (pos < slide.length - 1) {
        pos++;
      } else {
        pos = 0;
      }
      mostrar();
}
//validar formulario

var nombre=document.getElementById('nombre');
var email=document.getElementById('email');
var mensajes=document.getElementById('mensajes');



function validar(){

  var mensajesError= [];

    if(nombre.value==='' || nombre.value===null){
        nombre.focus();
        mensajesError.push("Ingrese un nombre");
    }

    if(email.value==='' || email.value===null){
      email.focus();
      mensajesError.push("Ingrese un email");
    }

    /*if(!email.includes("@"))
    {
      mensajesError.push("Ingrese un email válido");
    }*/

    mensajes.innerHTML = mensajesError.join(', ');

    return false;
}