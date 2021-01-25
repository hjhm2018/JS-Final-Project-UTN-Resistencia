//Script de Conversiones
		var distanciaContainer = document.getElementById('distanciaContainer');
		var areaContainer = document.getElementById('areaContainer');
		var volumenContainer = document.getElementById('volumenContainer');
		var presionesContainer = document.getElementById('presionesContainer');

		//Distancia 
		var metros = document.getElementById('metros');
		var millas = document.getElementById('millas');
		var km = document.getElementById('km');

		//Resultados
		var pies = document.getElementById('pies');
		var pies2 = document.getElementById('pies2');
		var millas2 = document.getElementById('millas2');


		//Área
		var acres = document.getElementById('acres');
		var acres2 = document.getElementById('acres2');
		var millasC = document.getElementById('millasC');
		var kmC2 = document.getElementById('kmC2');

		//Resultados
		var piesC = document.getElementById('piesC');
		var metrosC = document.getElementById('metrosC');
		var kmC = document.getElementById('kmC');
		var acres3 = document.getElementById('acres3');


		//Volumen
		var ap = document.getElementById('ap');
		var bbl2 = document.getElementById('bbl2');
		var mc = document.getElementById('mc');
		var bbl4 = document.getElementById('bbl4');
		var tm = document.getElementById('tm');
		var mc2 = document.getElementById('mc2');

		//Resultados
		var bbl = document.getElementById('bbl');
		var pc = document.getElementById('pc');
		var bbl3 = document.getElementById('bbl3');
		var galones = document.getElementById('galones');
		var bbl5 = document.getElementById('bbl5');
		var pc2 = document.getElementById('pc2');


		//Presión
		var psia = document.getElementById('psia');
		var bar = document.getElementById('bar');
		var btu = document.getElementById('btu');

		//Resultados
		var kpa = document.getElementById('kpa');
		var psia2 = document.getElementById('psia2');
		var joule = document.getElementById('joule');


		//Parrafos de los containers
		var distanciaP = document.getElementById('distanciaP');
		var areaP = document.getElementById('areaP');
		var volumenP = document.getElementById('volumenP');
		var presionesP = document.getElementById('presionesP');

		// Las funciones con el evento onclick para mostrar y ocultar las diferentes secciones
		distanciaP.onclick = ()=>{
			if (distanciaContainer.style.display == 'block') {
				distanciaContainer.style.display = 'none';
			} else{
				distanciaContainer.style.display = 'block';
			}
		}

		areaP.onclick = ()=>{
			if (areaContainer.style.display == 'block') {
				areaContainer.style.display = 'none';
			} else{
				areaContainer.style.display = 'block';
			}
		}

		volumenP.onclick = ()=>{
			if (volumenContainer.style.display == 'block') {
				volumenContainer.style.display = 'none';
			} else{
				volumenContainer.style.display = 'block';
			}
		}

		presionesP.onclick = ()=>{
			if (presionesContainer.style.display == 'block') {
				presionesContainer.style.display = 'none';
			} else{
				presionesContainer.style.display = 'block';
			}
		}

		// Las funciones con el evento onkeyup realizan la conversión

		metros.onkeyup = ()=>{
			if(metros.value !== '' && metros.value > 0){
				pies.value = Number(metros.value * 3.281).toFixed(4);
			}else{
				pies.value = '';
			}
		}

		millas.onkeyup = ()=>{
			if(millas.value !== '' && millas.value > 0){
				pies2.value = Number(millas.value * 5.280).toFixed(4);
			}else{
				pies2.value = '';
			}
		}

		km.onkeyup = ()=>{

			if(km.value !== '' && km.value > 0){
				millas2.value = Number(km.value * 0.621).toFixed(4);
			}else{
				millas2.value = '';
			}
		}

		acres.onkeyup = ()=>{
			if(acres.value !== '' && acres.value > 0){
				piesC.value = Number(acres.value * 43.560).toFixed(4);
			}else{
				piesC.value = '';
			}
		}

		acres2.onkeyup = ()=>{
			if(acres2.value !== '' && acres2.value > 0){
				metrosC.value = Number(acres2.value * 4.047).toFixed(4);
			}else{
				metrosC.value = '';
			}
		}

		millasC.onkeyup = ()=>{
			if(millasC.value !== '' && millasC.value > 0){
				kmC.value = Number(millasC.value * 2.590).toFixed(4);
			}else{
				kmC.value = '';
			}
		}

		kmC2.onkeyup = ()=>{
			if(kmC2.value !== '' && kmC2.value > 0){
				acres3.value = Number(kmC2.value * 247.1).toFixed(4);
			}else{
				acres3.value = '';
			}
		}

		ap.onkeyup = ()=>{
			if(ap.value !== '' && ap.value > 0){
				bbl.value = Number(ap.value * 7758.4).toFixed(4);
			}else{
				bbl.value = '';
			}
		}

		bbl2.onkeyup = ()=>{
			if(bbl2.value !== '' && bbl2.value > 0){
				pc.value = Number(bbl2.value * 5.615).toFixed(4);
			}else{
				pc.value = '';
			}
		}

		mc.onkeyup = ()=>{
			if(mc.value !== '' && mc.value > 0){
				bbl3.value = Number(mc.value * 6.291).toFixed(4);
			}else{
				bbl3.value = '';
			}
		}

		bbl4.onkeyup = ()=>{
			if(bbl4.value !== '' && bbl4.value > 0){
				galones.value = Number(bbl4.value * 42).toFixed(4);
			}else{
				galones.value = '';
			}
		}

		tm.onkeyup = ()=>{
			if(tm.value !== '' && tm.value > 0){
				bbl5.value = Number(tm.value * 7.3).toFixed(4);
			}else{
				bbl5.value = '';
			}
		}

		mc2.onkeyup = ()=>{
			if(mc2.value !== '' && mc2.value > 0){
				pc2.value = Number(mc2.value * 35.320).toFixed(4);
			}else{
				pc2.value = '';
			}
		}

		psia.onkeyup = ()=>{
			if(psia.value !== '' && psia.value > 0){
				kpa.value = Number(psia.value * 6.895).toFixed(4);
			}else{
				kpa.value = '';
			}
		}

		bar.onkeyup = ()=>{
			if(bar.value !== '' && bar.value > 0){
				psia2.value = Number(bar.value * 14.504).toFixed(4);
			}else{
				psia2.value = '';
			}
		}

		btu.onkeyup = ()=>{
			if(btu.value !== '' && btu.value > 0){
				joule.value = Number(btu.value * 1054.6).toFixed(4);
			}else{
				joule.value = '';
			}
		}