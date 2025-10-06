
	
function nobackbutton(){
   window.location.hash="no-back-button";
   window.location.hash="Again-No-back-button"; //chrome
   window.onhashchange=function(){window.location.hash="no-back-button";};
}

function chequea(wcadena, winput1) {
    var elem1 = document.getElementById(winput1);
    var wnewcad = "";
    var letmat = wcadena.split("");
    var i;
    var chkpunto=0;
    for (i = 0; i < wcadena.length; i++) { 
        var letra=letmat[i];
        if (letra === ".") {
            chkpunto++;
        }
        if (letra === "1" || letra === "2" || letra === "3" || letra === "4" || letra === "5" || letra === "6" || letra === "7" || letra === "8" || letra === "9" || letra === "0" || letra === ".")
        {
            wnewcad=wnewcad+letra;
            if (letra === "." && chkpunto>1) {
                wnewcad = wnewcad.substring(0, wnewcad.length - 1);
            }
        }
    }
    elem1.value=wnewcad;
}
        
function ImprimirPagina(wpagina) {
    if (window.print)
        window.print();
    else
        alert("Lo siento, pero a tu navegador no se le puede ordenar imprimir" +
                " desde la web. Actualizate o hazlo desde los menús");
}

function verificar() {
    if ((document.frm.nombre.value.length === 0) || (document.frm.emailcontrata.length === "") || (document.frm.asunto.length === "") || (document.frm.consulta.length === ""))
    {
        alert('Por favor, ingrese la información en los campos marcados con asterisco\nGracias');
        return;
    } else if (document.frm.emailcontrata.value.indexOf("@") === -1 || document.frm.emailcontrata.value.indexOf(".") === -1)
    {
        alert("Su direccion de correo electronica es incorrecta, verifiquela por favor");
    } else
    {
        document.frm.submit();
    }
}

function AbreVentana(wVentana, nh, nw) {
    var wid_doc = wVentana;
    window.open(wid_doc, "_blank", "statusbar=no,toolbar=no,menubar=no,directories=no,status=no,resizable=yes,location=no,scrollbars=yes,height=" +
            nh + ",width=" + nw + ",screenX=0,screenY=0,top=0,left=0,maximize=1");
}

function footer() {
    var txt_footer =
            "<div class=\"footer\"><br>" +
            "<p>&copy;&nbsp;<script type=\"text/javascript\">document.write(new Date().getFullYear());</script>" +
            "&nbsp;&nbsp; Amazon Medical SAC. Todos los derechos reservados</p>" +
			"<p><a href=\"#\" target=\"_blank\" rel=\"noopener\"> Powered by SysfacSystems</a></p>"+
            "</div>";
    document.write(txt_footer);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(wCookie) {
    var wcook = getCookie(wCookie);
    return wcook;
}

function ponerFecha2(wdesde,whasta) {
    var wDate = new Date();
    var wDia = "0" + wDate.getDate();
    var wMes = "0" + (wDate.getMonth() + 1);
    var wYear = wDate.getFullYear();
    var wFecha = wYear + "-" + wMes.slice(wMes.length - 2, 3) + "-" + wDia.slice(wDia.length - 2, 3);
    document.getElementById(wdesde).value = wYear+"-"+wMes.slice(wMes.length-2,3)+"-"+"01";
    document.getElementById(whasta).value = wFecha;
}

function poneFecha(wdesde,whasta) {
    var wDate = new Date();
    var wDia = "0" + wDate.getDate();
    var wMes = "0" + (wDate.getMonth() + 1);
    var wYear = wDate.getFullYear();
//    var wFecha = wYear + "-" + wMes.slice(wMes.length - 2, 3) + "-" + wDia.slice(wDia.length - 2, 3);
    var wFecha = wDia.slice(wDia.length-2,3)+"/"+wMes.slice(wMes.length-2,3)+"/"+wYear;
    document.getElementById(wdesde).value = "01/"+wMes.slice(wMes.length-2,3)+"/"+wYear;
    document.getElementById(whasta).value = wFecha;
}
      
function formatoNumero(wnumero){
    var wformato=wnumero.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
    return wformato;
}

function cuentaChars(wimp,wresult,wLimite){
    var wcampo=document.getElementById(wimp);
    var wnc=wcampo.value.length;
    if (wnc > wLimite) {
        wcampo.value = wcampo.value.substring(0, wLimite); 
    }else{
        document.getElementById(wresult).value=wLimite - wnc; 
     
    }     
} 

function datosEmpresa(wdato) {
    $.ajax({
        url: "php/datosEmpresa.php",
        method: "POST",
        async: false,
        data: {wform: wdato},
        success: function (resp) {
document.write(resp);
        }
    });
}

function nosotros() {
	var wnosotros=
"Somos una empresa dedicada a la comercialización de productos farmacéuticos. Servicio de almacenaje y servicio de acondicionado."
	document.write(wnosotros);
}


function miEmpresa() {
	var wcontacto=
				"<address>"+
				"<strong> Amazon Medical SAC.</strong><br>AV. Reynaldo Saavedra Piñon Nro 2425 URB. Elio<br>Lima - <strong>Perú</strong>"+
				"</address>"+
				"<strong>Teléfono:</strong> 931973669<br>"+
				"<strong>Correo:</strong> amazonpharma.pe@gmail.com";
	document.write(wcontacto);
}

function miMenuTerap() {
	var wcontacto=
				"<address><strong>"+
				"<a><p class='mTerap' onclick=\"areasTerapeuticas('1');\">Productos Farma</p></a>"+
				"<a><p class='mTerap' onclick=\"areasTerapeuticas('2');\">Almacenaje</p></a>"+
				"<a><p class='mTerap' onclick=\"areasTerapeuticas('3');\">Acondicionado</p></a>"+
				"</strong></address>";
	document.write(wcontacto);
}

function altura(){
  var altura_arr = [];//CREAMOS UN ARREGLO VACIO
  $('.descrip').each(function(){//RECORREMOS TODOS LOS CONTENEDORES DE LAS IMAGENES, DEBEN TENER LA MISMA CLASE
    var altura = $(this).height(); //LES SACAMOS LA ALTURA
    altura_arr.push(altura);//METEMOS LA ALTURA AL ARREGLO
  });
  altura_arr.sort(function(a, b){return b-a}); //ACOMODAMOS EL ARREGLO EN ORDEN DESCENDENTE
  $('.descrip').each(function(){//RECORREMOS DE NUEVO LOS CONTENEDORES
    $(this).css('height',altura_arr[0]);//LES PONEMOS A TODOS LOS CONTENEDORES EL PRIMERO ELEMENTO DE ALTURA DEL ARREGLO, QUE ES EL MAS GRANDE.
  });
}

function areasTerapeuticas(warea){
	var wtxt="";
	var wwtit="";
switch(warea) {
  case '1':
	wwtit='PRODUCTOS FARMA'
    wtxt=
	'NEURO---Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin augue arcu, egestas vitae ipsum vel, ornare gravida erat. Quisque eget lacus mauris. Nulla dignissim mauris libero, ac feugiat nibh auctor eu. Fusce eget venenatis lacus. Fusce dapibus pretium feugiat. Donec ac metus nec lectus dapibus efficitur. Aliquam dictum odio a luctus sodales. Mauris sit amet viverra dui. Aenean quis orci tellus. Sed at dignissim erat. Vestibulum et luctus diam. In eleifend ac lectus a vestibulum. Vivamus eu eros dictum, fringilla nibh eget, bibendum mi. Quisque non ipsum non lacus condimentum aliquet eu sed ante. Duis volutpat nisi sed fermentum facilisis. Nulla eget lacus massa.';
    break;
  case '2':
	wwtit='ALMACENAJE'
    wtxt=
	'FETI--Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin augue arcu, egestas vitae ipsum vel, ornare gravida erat. Quisque eget lacus mauris. Nulla dignissim mauris libero, ac feugiat nibh auctor eu. Fusce eget venenatis lacus. Fusce dapibus pretium feugiat. Donec ac metus nec lectus dapibus efficitur. Aliquam dictum odio a luctus sodales. Mauris sit amet viverra dui. Aenean quis orci tellus. Sed at dignissim erat. Vestibulum et luctus diam. In eleifend ac lectus a vestibulum. Vivamus eu eros dictum, fringilla nibh eget, bibendum mi. Quisque non ipsum non lacus condimentum aliquet eu sed ante. Duis volutpat nisi sed fermentum facilisis. Nulla eget lacus massa.';
    break;
  case '3':
	wwtit='ACONDICIONADO'
    wtxt=
	'URO--Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin augue arcu, egestas vitae ipsum vel, ornare gravida erat. Quisque eget lacus mauris. Nulla dignissim mauris libero, ac feugiat nibh auctor eu. Fusce eget venenatis lacus. Fusce dapibus pretium feugiat. Donec ac metus nec lectus dapibus efficitur. Aliquam dictum odio a luctus sodales. Mauris sit amet viverra dui. Aenean quis orci tellus. Sed at dignissim erat. Vestibulum et luctus diam. In eleifend ac lectus a vestibulum. Vivamus eu eros dictum, fringilla nibh eget, bibendum mi. Quisque non ipsum non lacus condimentum aliquet eu sed ante. Duis volutpat nisi sed fermentum facilisis. Nulla eget lacus massa.';
    break;
    // code block
}	
	document.getElementById('areatit1').innerHTML=wwtit;
	document.getElementById('areatit2').innerHTML=wwtit;
	$("#areatext").text(wtxt);
}
