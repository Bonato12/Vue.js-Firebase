<template>
	 <div id="app">
	 <h2> Home </h2>
			 <div class="col-md-8 col-md-offset-5" style="margin-left:220px;">
		     <table class="table table-striped table-bordered  animated bounceInLeft" id="tabla">
                    <thead>
                    <tr>
						<td>Dni</td>
                        <td>Nombre</td>
                        <td>Apellido</td>
						<td>Mail</td>
                        <td></td>
                    </tr>
                    </thead>
                    <tbody v-for="item in personas">
                        <tr>
							<td>
                                {{ item.dni }}
                            </td>
                            <td>
                                {{ item.nombre }}
                            </td>
                            <td>
                                {{item.apellido }}
                            </td>
							<td>
                                {{ item.mail}}
                            </td>
                            <td>
								  <router-link :to="/modificar/+item.key" active-class="activo" class="btn btn-primary" tag="button" >Modificar</router-link>
                                <a class="btn btn-danger" v-on:click="eliminar(item.key)"
								                                      role="button">
                             
                                    Eliminar
                                </a>
                            </td>
                        </tr>
                    </tbody>
             </table>
			 </div>
	</div>
	

</template>
<script>

import {db} from '../firebase';

export default {
	created (){
		 db.ref('persona').on('value',  snapshot => this.cargar(snapshot.val()))
			
	 },
	name: "app",
  data() {
    return {
	     dni: null,
		 nombre: null,
		 apellido: null,
		 mail: null,
		 personas: [],

    }
  },
  

   methods : {
   
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
	eliminar(key){
		 db.ref('/persona/'+key).remove();
		 alert("ELIMINADO!");
	
	
	}
  
			
			
			
	}		
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>