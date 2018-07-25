<template>
     <div id="app">
	     <router-link to="/home" active-class="activo" exact>Home </router-link>
	     <router-link to="/alta" active-class="activo" >Alta</router-link>
	     <hr>
	     <router-view> </router-view>
     </div>
</template>
<script>
import {db} from './firebase';

export default {
	created (){
		
			
	 },
	name: "app",
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
