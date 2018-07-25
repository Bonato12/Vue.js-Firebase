<template>
	<div id="app">
		 <h2> Nuevo </h2>
		 <br>
		 <br>
			<div class="col-md-8 col-md-offset-5">
				 <form class="form-horizontal" style="margin-left:460px">
						<div class="row">
							  <div class="input-group mb-2">
								<div class="input-group-prepend">
								  <div class="input-group-text">Dni</div>
								</div>
								<input type="text" class="form-control"  v-model="dni" placeholder="Ingrese Dni">
							  </div>
						</div>
						<br/>
						<div class="row">
							  <div class="input-group mb-2">
								<div class="input-group-prepend">
								  <div class="input-group-text">Nombre</div>
								</div>
								<input type="text" class="form-control"  v-model="nombre" placeholder="Ingrese Nombre">
							  </div>
						</div>
						<br/>
						<div class="row">
							  <div class="input-group mb-2">
								<div class="input-group-prepend">
								  <div class="input-group-text">Apellido</div>
								</div>
								  <input type="text" class="form-control"  v-model="apellido" placeholder="Ingrese Apellido" >
							  </div>
						</div>
						<br/>
						<div class="row">
							  <div class="input-group mb-2">
								<div class="input-group-prepend">
								  <div class="input-group-text">Mail</div>
								</div>
								<input type="mail" class="form-control" id="aparicion" v-model="mail" placeholder="Ingrese Mail">
							  </div>
						</div>
						<br/>
						<div class="row">
							  <div class="input-group mb-2">
								     <a role="button" class="btn btn-primary" v-on:click="nuevo()">Guardar</a>
									 <br>
									 <a role="button" class="btn btn-success" v-on:click="volverHome()">Volver</a> 
							  </div>
						</div>	
						
					</form>
			</div>
	</div>
</template>



<script>

	import {db} from '../firebase';
	
	 export default {
     name: "app",
     data() {
    return {
		 dni: null,
		 nombre: null,
		 apellido: null,
		 mail: null

    }
    },

   methods : {
		 nuevo(){
			 db.ref('/persona').push({
					 dni: this.dni,
					 nombre: this.nombre,
					 apellido: this.apellido,
					 mail: this.mail,
				});
			 alert("GUARDADO!!");
		},
		 volverHome(){
			 this.$router.push('/Home');
		 
		 }
		
				
	}	
}	




</script>