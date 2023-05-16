let slide= ["img/banner1.png","img/banner2.png"];
let pos=0;
mostrar();
function mostrar(){
    document.getElementById("pic").src = slide[pos];
}
function siguiente(){
    if (pos < slide.length - 1) {
        pos++;
      } else {
        pos = 0;
      }
      mostrar();
}