<template>
	<div class="detailBox">
		<h1 v-text="newsItem.title"></h1>
		<article class="detail-article">
			<p v-text="newsItem.content"></p>
		</article>
		<div class="btn-group">
			<button type="button" @click="goBack()" class="btn btn-deep btn-back">返回</button>
		</div>
	</div>
</template>

<script>
	import store from '../store.js'
	export default {
		store,
		mounted(){
			// console.log(store.state.list);
		},
		methods:{
			goBack(){
				this.$router.push('/home/list');
			}
		},
		computed:{
			newsItem (){
				let tmp = {};
				store.state.list.forEach(function (item) {
					if(item.focus) {
						tmp = item
					}
				});
				return tmp;
			}
			// newsItem(){
			// 	console.log(store.state.list);
			// 	return store.state.list
			// 	// store.state.list.forEach(function(item){
			// 	// 	console.log(item);
			// 	// 	if(item.focus) {
			// 	// 		console.log(item);
			// 	// 		return item
			// 	// 	}
			// 	// })
			// }
		}
	}
</script>

<style lang="stylus" scoped>
.detailBox {
	padding 10px
	padding-bottom 80px
	text-align left
}
.detailBox h1 {
	font-size 16px
	border-bottom 1px solid #eee
	padding-bottom 4px
	margin-bottom 4px
}
.detail-article {
	margin-bottom 30px
	padding 6px
}
.btn-back{
	width 96%
}
</style>