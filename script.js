
//validar formulario

function validar(){
  var nombre=document.getElementById('nombre');
  var email=document.getElementById('email');
  var mensaje=document.getElementById('mensaje');
  var telefono=document.getElementById('telefono');
  var errorNombre = document.getElementById("errorNombre");
  var errorMail=document.getElementById("errorMail");
  var errorMensaje=document.getElementById("errorMensaje");
  var errores=0;

  var verifMail=/([-\w-\.])+@+([a-z-0-9]+\.)+(\w{2,8})/i;
  var correcto= [];

    
  //nombre
    if(nombre.value===''){
        nombre.focus();
        errorNombre.innerHTML = "Ingrese un nombre";
        document.querySelector("#nombre").style.border="2px solid red";
        errores++;
    }else{
        if(nombre.value.length>20){
          nombre.focus();
          errorNombre.innerHTML = "Máximo de caracteres permitidos:20";
          document.querySelector("#nombre").style.border="2px solid red";
          errores++;
        }
      errorNombre.innerHTML = "";
      document.querySelector("#nombre").style.border="1px solid rgb(192, 167, 128)";
      correcto.push("NOMBRE: "+nombre.value);
    }

    //mail
    if(email.value===''){
      email.focus();
      errorMail.innerHTML = "Ingrese un email";
      document.querySelector("#email").style.border="2px solid red";
      errores++;
    }else{
      if(!verifMail.test(email.value))
      { 
        email.focus();
        errorMail.innerHTML ="Ingrese un email válido";
        document.querySelector("#email").style.border="2px solid red";
        errores++;
      }else{
        errorMail.innerHTML = "";
        document.querySelector("#email").style.border="1px solid rgb(192, 167, 128)";
        correcto.push("EMAIL: "+email.value);
      } 
    }

    //telefono
    if(telefono.value!="")
    {
      correcto.push("TELEFONO: "+telefono.value);
    }

    //mensaje
    if(mensaje.value===''){
      mensaje.focus();
      errorMensaje.innerHTML = "Ingrese el mensaje";
      document.querySelector("#mensaje").style.border="2px solid red";
      errores++;
    }else{
      if(mensaje.value.length > 400){
        
        mensaje.focus();
        errorMensaje.innerHTML = "maximo permitido: 400";
        document.querySelector("#mensaje").style.border="2px solid red";
        errores++;
      }else{
        errorMensaje.innerHTML = "";
        document.querySelector("#mensaje").style.border="1px solid rgb(192, 167, 128)";
        correcto.push("MENSAJE: "+mensaje.value);
      }
    }
    //reset formulario
    if(errores==0)
    {
      document.getElementById('form').reset();
      
      mostrarcorrecto(correcto);
    }

    return false;
}

function mostrarcorrecto(correcto){
  
  var contenido = document.querySelector("#mostrarForm");

  for (let i = 0; i < correcto.length; i++) {
    var li= document.createElement("li"); 
    li.textContent= correcto[i];
    contenido.appendChild(li);
  }

}


