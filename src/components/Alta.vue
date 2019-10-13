<template>
	<div id="app">
		 <h2> Nuevo </h2>
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
							  <div class="input-group mb-3">
									 <b-button on:click="nuevo()" class="pb-2" variant="success">Guardar</b-button>
      			 			 <b-button on:click="volverHome()" class="pb-2" variant="primary">Volver </b-button>
							  </div>
						</div>
						<b-row>
							  <b-col lg="2" class="pb-2">
									<b-button size="sm">Guardar</b-button>
								</b-col>
							  <b-col lg="2" class="pb-2">
									<b-button  size="sm">Volver</b-button>
								</b-col>
						</b-row>
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
			 db.ref('/users').push({
					 dni: this.dni,
					 nombre: this.nombre,
					 apellido: this.apellido,
					 mail: this.mail,
				}).then(response=>{
					console.log(response)
				}).catch(error=>{
					console.log(error);
				})
		},
		 volverHome(){
			 this.$router.push('/Home');
		 }


	}
}




</script>
