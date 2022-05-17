
$(document).ready(function(){
    $("#enviar").click(function(){
      var correo = $("#correo").val();
      var clave = $("#clave").val();

      if((correo.length == 0) || (clave.length == 0)){
        alert("Introducir nuevamente");
      }
      else{
        $(location).attr("href","http://www.google.cl")
      }
      
    });
})