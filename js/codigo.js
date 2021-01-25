// Este sería el script de la página principal usando JQuery
// Solo se basa en funciones que ocultan y muestran las diferentes secciones
$(function(){

	$('#descripcion').show();
	$('#conversionesTabla').hide();
	$('#cuestionario').hide();
	$('#porosidad').hide();

	$('#navHome').click(cargarHome);
	$('#navConversiones').click(cargarConversiones);
	$('#navCuestionario').click(cargarCuestionario);
	$('#navPorosidad').click(cargarPorosidad);

	function cargarHome(){
		$('#descripcion').show();
		$('#conversionesTabla').hide();
		$('#cuestionario').hide();
		$('#porosidad').hide();

	}

	function cargarConversiones(){
		$('#descripcion').hide();
		$('#conversionesTabla').show();
		$('#cuestionario').hide();
		$('#porosidad').hide();

	} 

	function cargarCuestionario(){
		$('#descripcion').hide();
		$('#conversionesTabla').hide();
		$('#cuestionario').show();
		$('#porosidad').hide();												
	}  

	function cargarPorosidad(){
		$('#descripcion').hide();
		$('#conversionesTabla').hide();
		$('#cuestionario').hide();
		$('#porosidad').show();
	} 

})

