var valor = document.getElementById("valor");

valor.addEventListener('keyup', convertir);
txtResultado = document.getElementById("resultado");
unidad1 = document.getElementById("unidad1");
unidad1.addEventListener('change', convertir);
unidad2 = document.getElementById("unidad2");
unidad2.addEventListener('change', convertir);

var resultado;
function convertir() {
	if (valor.value == '') {return;}
	 numero = valor.value;
	 numero = parseFloat(numero); 

	
}	

 