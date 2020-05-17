(function(){
    var trabajos = document.getElementsByClassName('trabajo');
		var showing 
		showing=false

		
		
		function mostrarDescripcion(){
			this.querySelector("#imagen").style.display="block";
			this.querySelector("#imagen").style.width="50%";
			this.querySelector("#imagen").style.margin = "auto";
			this.querySelector("#imagen").style.borderRadius="50%";
			setTimeout(show.bind(null, this.querySelector("#info")), 500);
			
		}

		function show(e){
            e.style.display="block";
            e.style.opacity="1";
			showing = false
		}
		

		function ocultarDescripcion(){
			setTimeout(ocultar.bind(this), 500);
		}

		function ocultar(e){
			this.querySelector("#imagen").style.display="block";
			this.querySelector("#imagen").style.width="100%";
			this.querySelector("#imagen").style.margin = "auto";
            this.querySelector("#imagen").style.borderRadius="0%";
            this.querySelector("#info").style.opacity="0";
            this.querySelector("#info").style.display="none";
		}


		for (var i=0; i < trabajos.length; i++){
            
			console.log(trabajos[i]);
			trabajos[i].addEventListener('mouseenter', mostrarDescripcion);
			trabajos[i].addEventListener('mouseleave', ocultarDescripcion);
		}
}())