<template>
	<div>
		 <br>
		 <br>
		 <h2> Modificar </h2>
		 <br>
		 <div class="col-md-8 col-md-offset-5">
				 <form class="form-horizontal" style="margin-left:460px">
						<div class="row">
							  <div class="input-group mb-2">
								<div class="input-group-prepend">
								  <div class="input-group-text">Dni</div>
								</div>
								<input type="number" disabled="disabled" class="form-control"  v-model="dni" placeholder="Ingrese Dni">
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
								<input type="mail" class="form-control" v-model="mail" placeholder="Ingrese Mail">
							  </div>
						</div>
						<input type="hidden" class="form-control"  v-model="keyA" placeholder="Ingrese Mail">
						<br/>
						<div class="row">
							  <div class="input-group mb-2">
								     <a role="button" class="btn btn-primary" v-on:click="modificar(keyA)">Guardar</a>
									 <br>
							  </div>
						</div>	
						
					</form>
			</div>
	</div>
</template>



<script>

	import {db} from '../firebase';
	
	 export default {
	 created (){
		 db.ref('persona').on('value',  snapshot => this.cargar(snapshot.val()));
		 this.Listar();
			
	 },
  
     data() {
		 return {
		 id: this.$route.params.id,
		 dni: null,
		 nombre: null,
		 apellido: null,
		 mail: null,
		 keyA: null,
		 personas: [],
		}
    },
	methods:{
		 cargar(ListaFirebase){
			 this.personas = [];
			 for (var key in ListaFirebase){
				 this.personas.push({
				 dni: ListaFirebase[key].dni,
				 nombre: ListaFirebase[key].nombre,
				 apellido: ListaFirebase[key].apellido,
				 mail: ListaFirebase[key].mail,
				 key: key,
			})
		}
    },
		 Listar(){
		 console.log(this.id);
		 var key1 = this.id;
		 for (var clave in this.personas){
			 if (this.personas[clave].key == key1){
				 this.dni = this.personas[clave].dni;
				 this.nombre = this.personas[clave].nombre;
				 this.apellido = this.personas[clave].apellido;
				 this.mail = this.personas[clave].mail;
				 this.keyA = this.personas[clave].key
			 }
		 
		 }
		},
		modificar(key){
		db.ref('/persona/'+key).update({
			 nombre: this.nombre,
			 apellido: this.apellido,
			 mail: this.mail
		
		})
		alert("Modificado");
		}
	}
	}




</script>