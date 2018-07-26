<template>
    <div>
		<div>
			<b-nav class="navbar navbar-expand-lg navbar-light bg-light">
				<b-nav-item active>Active</b-nav-item>
				<b-nav-item>Link</b-nav-item>
				<b-nav-item-dropdown id="nav7_ddown" text="Persona" extra-toggle-classes="nav-link-custom" right>
					<b-dropdown-item>
						<router-link to="/home" active-class="activo" exact>Home </router-link>
					</b-dropdown-item>
					<b-dropdown-divider></b-dropdown-divider>
					<b-dropdown-item>
						<router-link to="/alta" active-class="activo" >Alta</router-link>
					</b-dropdown-item>	
				</b-nav-item-dropdown>
			</b-nav>
		</div>
	    <router-view> </router-view>
    </div>
</template>
<script>
import {db} from './firebase';

export default {
	created (){
		
			
	 },
  data() {
    return {
      

    }
  },
  

   methods : {
		 
			
			
			
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

.activo{
	color:red;
}
</style>
