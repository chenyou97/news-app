<template>
	<div>
		<p>this is Info page</p>
		<button @click="addCount">+1</button>
	</div>
</template>

<script>
	import store from '../store.js'
	export default {
		store,
		methods:{
			addCount(){
				store.commit('increaseCount');
			}	
		}
	}
</script>