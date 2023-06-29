function IMC() {
	var peso = document.getElementById("peso").value;
	var altura = document.getElementById("altura").value;
    var resultado = document.getElementById("resultado");
    
	altura = altura / 100;
      
    var imc = peso / (altura * altura);

	if (peso && altura != "") {
		resultado.innerHTML = imc.toFixed(2);
	}

}

function Reset() {
	document.getElementById('resultado').innerHTML = '';
}