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
                    <tbody v-for="item in PersonaT">
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
                                <button class="btn btn-danger" v-on:click="eliminar(item.key)"
								                                      type="button">
                             
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    </tbody>
             </table>
			 <div>
				<button class="btn-success" v-on:click="anteriorPagina">
					<icon name="arrow-left" scale="2"></icon>
				</button> 
				<button class="btn-success" v-on:click="siguientePagina">
					<icon name="arrow-right" scale="2"></icon>
				</button>
		     </div>
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
		 tamPagina:3,
		 paginaActual:1,
		 currentSort:'nombre',
		 currentSortDir:'asc',
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
		
		
		},
		
		ordenar(s) {
		  if(s === this.currentSort) {
			this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
		  }
		  this.currentSort = s;
		},
		siguientePagina(){
			if((this.paginaActual*this.tamPagina) < this.personas.length) this.paginaActual++;
		},
		anteriorPagina(){
			if(this.paginaActual > 1) this.paginaActual--;
		}			
	},
	computed:{
		PersonaT() {
			return this.personas.sort((a,b) => {
			var modifier = 1;
			if(this.currentSortDir === 'desc') modifier = -1;
			if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
			if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
			return 0;
		  }).filter((row, index) => {
			var start = (this.paginaActual-1)*this.tamPagina;
			var end = this.paginaActual*this.tamPagina;
			if(index >= start && index < end) return true;
		  });
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