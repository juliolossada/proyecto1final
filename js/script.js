const apiURL ="https://api.pokemontcg.io/v1/cards"
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
	xhr.send();


