
window.onload= function(){

  var a = document.getElementById("mostrar_info");
  var b = document.getElementById("mostrar_trabajos");
  var c = document.getElementById("mostrar_contacto");

  console.log("Carge");

  a.style.display = "none";
  b.style.display = "none";
  c.style.display = "none";

  window.scrollTo(0,0)


}


function mostrar_info(param_div_id){

  var a = document.getElementById("mostrar_info");
  var b = document.getElementById("mostrar_trabajos");
  var c = document.getElementById("mostrar_contacto");

  if (param_div_id === "info"){

  a.style.display = `block`;
  b.style.display = 'none';
  c.style.display = 'none';
  }

  else if (param_div_id === "trabajos"){

    a.style.display = 'none';
    b.style.display = `block`;
    c.style.display = 'none';
  }

  else if (param_div_id === "contacto"){

    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = `block`;

  }
}
