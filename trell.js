function crearLista(){
	var nuevaTajeta = document.getElementById("boton");
	var tarjeta =document.createElement ("div");
	nuevaTajeta.innerHTML = tarjeta;
	document.getElementById("tarjetas").appendChild(tarjeta);
	var aleatorio = Math.random ();

	tarjeta.id = aleatorio;


	var idTarjeta = document.getElementById(aleatorio.id);
	var titulo = document.createElement("h3");
	idTarjeta.innerHTML = titulo;
	document.getElementsTagName("h3");
	//var lista = document.getElementById("lista").value;
	//document.createTextNode(lista);
}
