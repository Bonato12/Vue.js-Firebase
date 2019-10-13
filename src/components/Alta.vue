<template>
	<div id="app">
		<div class="container">
			<div class="col-md-4">
				<h2> Nuevo Usuario </h2>
				<br>
				 <form class="form-horizontal">
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
						<b-row>
							  <b-col lg="2" class="pb-2">
									<b-button  @click="nuevo()" size="sm"variant="success">Guardar</b-button>
								</b-col>
							  <b-col lg="2" class="pb-2">
									<b-button @click="volverHome()"  size="sm" variant="primary">Volver</b-button>
								</b-col>
						</b-row>
					</form>
			</div>
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
