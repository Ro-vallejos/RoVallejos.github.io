let slide= [
  {
    imagen:"img/home.png",
    linkImagen:"#",

  },
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
function anterior(){

    if(pos>0){
        pos--;
    }else{
        pos=slide.length -1;
    }
    mostrar();
}
