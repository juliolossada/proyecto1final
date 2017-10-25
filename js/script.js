function buscador() {

	var apiURL = "https://gateway.marvel.com/v1/public/characters?&apikey=7fdcf99ef3edcfacf7a544b1ac1acdad&ts=1508876052300&hash=7d7c5c20dec1c6c38d24a588de24f4aa&name="
	var conect1 = "&name="
	var conect2 = "&apikey="
	var tss ="&ts="
	var hash1 ="&hash="
	var ts= Date.now();
	var apikey ="7fdcf99ef3edcfacf7a544b1ac1acdad"
	var privatekey="8e0ae2c75d2d02bf964b34694f9fb91192d71427"
	var hash = md5(ts+privatekey+apikey);
	palabra = document.getElementById('buscador').value;
	var web = apiURL +palabra;
	document.getElementById('buscador').value="";
	const xhr = new XMLHttpRequest();
	xhr.open('GET', web, true);
	xhr.onload =() => {
		var json = JSON.parse(xhr.responseText);
		heroes = json.data.results;
		console.log(palabra.length)
		if((heroes.length==0) || (palabra.length==0))
		{
			document.getElementById("nameheroe").innerHTML = "No existe el superheroe";
			return
		}
			heroes.forEach(function(heroe) {
			
			if(palabra.toLowerCase() == heroe.name.toLowerCase()){
				respuesta = heroe
				document.getElementById("nameheroe").innerHTML = respuesta.name;
				document.getElementById("historia").innerHTML = "<b class=tamanito>History</b><br>" +respuesta.description;
				document.getElementById("imagen").innerHTML = "<img id='posi' src="+respuesta.thumbnail.path+"/portrait_xlarge.jpg>"
				document.getElementById("comics").innerHTML = "<b class=tamanito>Number of comics</b><br>" + respuesta.comics.available;
				document.getElementById("series").innerHTML = "<b class=tamanito>Number of series</b><br>" + respuesta.series.available;		
			}
			
			
			
		});
		
	};
	xhr.send();
}




