import Home from './components/Home.vue';
import Alta from './components/Alta.vue';
import Modificar from './components/Modificar.vue';


export const routes = [

		 {path: '/home',component: Home},
		 {path: '/alta', component: Alta},
		 {path: '/modificar/:id', component: Modificar},
		 


];