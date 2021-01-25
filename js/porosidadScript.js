// Script Porosidad
	var roca = document.getElementsByName('roca');

	var formularioPorosidad = document.getElementById('formularioPorosidad');

	// Estos son los mensajes que mostrará dependiendo del valor y el tipo de roca
	var baja = document.getElementById('baja');
	var buena = document.getElementById('buena');
	var alta = document.getElementById('alta');

	// Los cálculos se realizarán con el evento onchange

	formularioPorosidad.onchange = calcularPorosidad;

	function calcularPorosidad() {
	    var Δtlog = document.getElementById("Δtlog");
	    var ΔtlogValue = parseFloat(Δtlog.value);
	    
	    var Δtma = document.getElementById("Δtma");
	    var ΔtmaValue = parseFloat(Δtma.value);

	        
	    var Δtfl = document.getElementById("Δtfl");
	    var ΔtflValue = parseFloat(Δtfl.value);
	    

	    var ɸs = (ΔtlogValue-ΔtmaValue) / (ΔtflValue-ΔtmaValue);
	    
	    document.getElementById("ɸs").value = ɸs.toString(); 

	    document.getElementById("ɸs").value= ɸs.toFixed(4);

	    var ɸsporc = ((ΔtlogValue-ΔtmaValue) / (ΔtflValue-ΔtmaValue)) * 100;
	    
	    document.getElementById("ɸsporc").value = ɸsporc.toString(); 
	    
	    document.getElementById("ɸsporc").value= ɸsporc.toFixed(2);

	    // Dependiendo del tipo de roca seleccionada y el valor de porosidad se mostrará un mensaje

	    if (roca[0].checked && ɸsporc < 20 || roca[1].checked && ɸsporc < 4 ) {

	    	baja.style.display = "block";
	    	buena.style.display = "none";
	    	alta.style.display = "none";

	    } else if (roca[0].checked && ɸsporc < 30 || roca[1].checked && ɸsporc < 8 ) {

	    	buena.style.display = "block";
	    	baja.style.display = "none";
	    	alta.style.display = "none";

	    } else if (roca[0].checked && ɸsporc > 30 || roca[1].checked && ɸsporc > 8 ) {

	    	alta.style.display = "block";
	    	baja.style.display = "none";
	    	buena.style.display = "none";
	    }
	}