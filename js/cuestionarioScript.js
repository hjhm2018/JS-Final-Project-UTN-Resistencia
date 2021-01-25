
//Script Cuestionario realizado con JQuery

// Básicamente se basa en ocultar y mostrar las distintas preguntas
		$('#contenedor1').hide();
		$('#contenedor2').hide();
		$('#contenedor3').hide();
		$('#contenedor4').hide();
		$('#resultado').hide();

		$('#jugar').click(()=>{
			$('#contenedor1').show();
			$('#jugar').hide();
		});

		$('#siguiente1').click(()=>{
			$('#contenedor2').show();
			$('#contenedor1').hide();
		});

		$('#siguiente2').click(()=>{
			$('#contenedor3').show();
			$('#contenedor2').hide();
		});

		$('#siguiente3').click(()=>{
			$('#contenedor4').show();
			$('#contenedor3').hide();
		});

		$('#anterior1').click(()=>{
			$('#contenedor1').show();
			$('#contenedor2').hide();
		});

		$('#anterior2').click(()=>{
			$('#contenedor2').show();
			$('#contenedor3').hide();
		});

		$('#anterior3').click(()=>{
			$('#contenedor3').show();
			$('#contenedor4').hide();
		});

		// Dependiendo de las respuestas tendrá una puntuación

		$('#finalizar').click(()=>{
			$('#contenedor4').hide();

			if ($('input#Q1O1').is(":checked") && $('input#Q2O2').is(":checked") && $('input#Q3O4').is(":checked") && $('input#Q4O3').is(":checked")) {
				
				$('#progressBar').val(100);

				$('#textoResultado').html('El resultado es igual a: ' + $('#progressBar').val() + ' %');

				$('#resultado').show();

			} else if ($('input#Q1O1').is(":checked") && $('input#Q2O2').is(":checked") && $('input#Q3O4').is(":checked") || $('input#Q1O1').is(":checked") && $('input#Q2O2').is(":checked") && $('input#Q4O3').is(":checked") || $('input#Q1O1').is(":checked") && $('input#Q3O4').is(":checked") && $('input#Q4O3').is(":checked") || $('input#Q2O2').is(":checked") && $('input#Q3O4').is(":checked") && $('input#Q4O3').is(":checked") ) {
				
				$('#progressBar').val(75);

				$('#textoResultado').html('El resultado es igual a: ' + $('#progressBar').val());

				$('#resultado').show();

			} else if ($('input#Q1O1').is(":checked") && $('input#Q2O2').is(":checked") || $('input#Q1O1').is(":checked") && $('input#Q3O4').is(":checked") || $('input#Q1O1').is(":checked") && $('input#Q4O3').is(":checked") || $('input#Q2O2').is(":checked") && $('input#Q3O4').is(":checked") || $('input#Q2O2').is(":checked") && $('input#Q4O3').is(":checked") || $('input#Q3O4').is(":checked") && $('input#Q4O3').is(":checked")) {
				
				$('#progressBar').val(50);

				$('#textoResultado').html('El resultado es igual a: ' + $('#progressBar').val() + ' %');

				$('#resultado').show();

			} else if ($('input#Q1O1').is(":checked") || $('input#Q2O2').is(":checked") || $('input#Q3O4').is(":checked") || $('input#Q4O3').is(":checked")) {
				
				$('#progressBar').val(25);

				$('#textoResultado').html('El resultado es igual a: ' + $('#progressBar').val() + ' %');

				$('#resultado').show();

			} else {
				$('#progressBar').val(0);

				$('#textoResultado').html('El resultado es igual a: ' + $('#progressBar').val() + ' %');

				$('#resultado').show();
			}
			
		});