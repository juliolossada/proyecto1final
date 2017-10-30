document.getElementById("button").addEventListener("click", function(event){
    nombre = document.getElementById("nombre").value
    correo = document.getElementById('email')
    mensaje = true
	emailregex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if((nombre.length==0)||(nombre.length<4))
    	{	
    		alert('El nombre ingresado es invalido')
    		event.preventDefault()
    		mensaje =false;
    	}
    
	else if (emailregex.test(correo.value)) {
		mensaje =false;
	}
	else {
			alert('El email ingresado es invalido');
			event.preventDefault();
		 }

	if(mensaje ==true)
	{
	alert('mensaje enviado')
		 
	}
	
		 
	
});


function keyCode(event) {
    var x = event.keyCode;
    if (x == 13) {
        validaBlanco()
    }
};

function validaBlanco() {
	palabrita = document.getElementById('buscador').value;
	if(palabrita.length == 0) 
	{			document.getElementById("series").innerHTML = ""
				document.getElementById("historia").innerHTML = ""
				document.getElementById("nameheroe").innerHTML =""
				document.getElementById("imagen").innerHTML = ""
				document.getElementById("comics").innerHTML = ""
				document.getElementById("series").innerHTML = ""	
				document.getElementById("comics").innerHTML = ""
				document.getElementById("error").innerHTML = "NO EXISTE EL SUPERHEROE"

	}
	else
		buscador();
	
}




function buscador() {

	var apiURL = "https://gateway.marvel.com/v1/public/characters?&apikey=7fdcf99ef3edcfacf7a544b1ac1acdad&ts=1508876052300&hash=7d7c5c20dec1c6c38d24a588de24f4aa&name="
	var conect2 = "&apikey=";
	var tss ="&ts=";
	var hash1 ="&hash=";
	var ts= Date.now();
	var apikey ="7fdcf99ef3edcfacf7a544b1ac1acdad"
	var privatekey="8e0ae2c75d2d02bf964b34694f9fb91192d71427"
	var hash = md5(ts+privatekey+apikey);
	palabra = document.getElementById('buscador').value;
	var web = apiURL +palabra;
	document.getElementById('buscador').value="";
	console.log(palabra)
	const xhr = new XMLHttpRequest();
	xhr.open('GET', web, true);

	xhr.onprogress = function () {
    document.getElementById("loading1").innerHTML = "<div class='loader'></div>"
};
	xhr.onload = 
				document.getElementById("series").innerHTML = ""
				document.getElementById("loading1").innerHTML = ""
				document.getElementById("nameheroe").innerHTML =""
				document.getElementById("historia").innerHTML = ""
				document.getElementById("imagen").innerHTML = ""
				document.getElementById("comics").innerHTML = ""
				document.getElementById("series").innerHTML = ""
				document.getElementById("error").innerHTML = ""
				setTimeout(function () {
		
		var json = JSON.parse(xhr.responseText);
		heroes = json.data.results;
			if(heroes.length == 0)
			{	document.getElementById("loading1").innerHTML = ""
				document.getElementById("series").innerHTML = ""
				document.getElementById("comics").innerHTML = ""
				document.getElementById("error").innerHTML = "NO EXISTE EL SUPERHEROE"
			}
			heroes.forEach(function(heroe) {

			if(palabra.toLowerCase() == heroe.name.toLowerCase()){
				respuesta = heroe
				document.getElementById("loading1").innerHTML = ""
				document.getElementById("nameheroe").innerHTML = respuesta.name;
				document.getElementById("historia").innerHTML = "<b class=tamanito >History</b><br>" +respuesta.description;
				document.getElementById("imagen").innerHTML = "<img id='posi' src="+respuesta.thumbnail.path+"/portrait_xlarge.jpg>"
				document.getElementById("comics").innerHTML = "<b class=tamanito>Number of comics</b><br>" + respuesta.comics.available;
				document.getElementById("series").innerHTML = "<b class=tamanito>Number of series</b><br>" + respuesta.series.available + "<br>";		
			}
			else {
				document.getElementById("loading1").innerHTML = "NO EXISTE EL SUPERHEROE"

			}
			
			
			
		});
		
	},2000);
	xhr.send();
}








