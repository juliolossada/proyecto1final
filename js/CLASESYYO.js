
https://gateway.marvel.com:443/v1/public/characters?name=Spider-man&apikey=7fdcf99ef3edcfacf7a544b1ac1acdad

var apiURL = "https://gateway.marvel.com:443/v1/public/characters?"
var conect1 = "&name="
var conect2 = "&apikey="
var tss ="&ts="
var hash1 ="&hash="
var ts= Date.now();
var apikey ="7fdcf99ef3edcfacf7a544b1ac1acdad"
var privatekey="8e0ae2c75d2d02bf964b34694f9fb91192d71427"
var hash = md5(ts+privatekey+apikey);
console.log(apiURL+conect2+apikey+tss+ts+hash1+hash)





/*const apiURL ="https://api.pokemontcg.io/v1/cards"
	let cartas;
	const xhr = new XMLHttpRequest();
	xhr.open('GET', apiURL, true)
	xhr.onload =() => {
		var json = JSON.parse(xhr.responseText);
		cartas = json.cards;
		cartas.forEach(function(carta) {
			console.log(carta)
			document.getElementById("arr").innerHTML += "<li>" + carta.name + "<img src='" + carta.imageUrl + "'>" ;
    
		});
	};
	xhr.send();*/