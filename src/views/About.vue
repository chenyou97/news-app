<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>count:{{count}}</p>
  </div>
</template>

<script>
	import store from '../store.js'
	export default {
		data (){
			return {
				count:store.state.count
			}
		}
	}
</script>
