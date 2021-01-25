// Este es el script del formulario de contacto 
// El formulario consta de cuatro campos: nombre, apellido, email y un mensaje

var inputNombre = document.getElementById('nombre');
var inputApellido = document.getElementById('apellido');
var inputEmail = document.getElementById('email');
var inputMensaje = document.getElementById('mensaje');

// La API para la validación

function iniciar(){

	inputNombre.addEventListener("input", validacion, false);
	inputApellido.addEventListener("input", validacion, false);
	inputEmail.addEventListener("input", validacion, false);
	inputMensaje.addEventListener("input", validacion, false);

	
	validacion();

}

// Se crea la función validación que verificará si los campos están vacíos y muestra un mensaje personalizado y cambia el color de fondo del campo 

function validacion(){

if(inputEmail.value==''){

	inputEmail.setCustomValidity('Ingrese su email');
	inputEmail.style.backgroundColor='#FFDDDD';

} else{

	inputEmail.setCustomValidity('');
	inputEmail.style.backgroundColor='#FFFFFF';

	}

if(inputNombre.value==''){

	inputNombre.setCustomValidity('Ingrese su nombre');
	inputNombre.style.backgroundColor='#FFDDDD';

} else{

	inputNombre.setCustomValidity('');
	inputNombre.style.backgroundColor='#FFFFFF';

	}

 if(inputApellido.value==''){

	inputApellido.setCustomValidity('Ingrese su apellido');
	inputApellido.style.backgroundColor='#FFDDDD';

} else{

	inputApellido.setCustomValidity('');
	inputApellido.style.backgroundColor='#FFFFFF';

	}

if(inputMensaje.value==''){

	inputMensaje.setCustomValidity('Ingrese su mensaje');
	inputMensaje.style.backgroundColor='#FFDDDD';

} else{

	inputMensaje.setCustomValidity('');
	inputMensaje.style.backgroundColor='#FFFFFF';

	}
}

// La función iniciar se ejecuta al cargar la página

window.addEventListener("load", iniciar, false);