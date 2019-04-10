<template>
	<div class="listBox">
		<p v-if="newsList.length == 0">这里空空如也~~</p>
		<ul>
			<li v-for="(item,index) in newsList" :key="index" :class="['listItem',{'on':item.focus}]" @click="focusItem(item.id)">
				<h2 v-text="item.title" class="item-title"></h2>
				<p v-text="item.content" class="item-content"></p>
				<div class="item-bottom">
					<p v-text="item.time" class="item-time"></p>
					<router-link to="/home/detail" class="item-bottom-link" v-if="item.focus">查看详情>></router-link>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import store from '../store.js'
	export default {
		store,
		methods:{
			focusItem(id){
				store.commit('focusItem',id)
			}
		},
		computed:{
			newsList (){
				console.log(1);
				return store.state.list;
			}
		},
	}
</script>

<style lang="stylus" scoped>
.listBox {
	padding 10px
}

.listItem {
	border 1px solid #ccc
	margin-bottom 5px
	border-radius 4px
	box-shadow 1px 1px 2px 0px #ccc
	text-align left
}
.item-title {
	line-height 40px
	border-bottom 1px solid #ccc
	font-size 16px
	padding-left 6px
}
.item-content {
	overflow: hidden;
	margin 6px
	word-break:break-all
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical ;
}
.item-bottom {
	display flex
	align-items center
	justify-content space-between
	font-size 14px
	padding 6px
}
.item-bottom-link {
	color #fff
}
.listBox .on {
	background #41b883
	color #fff
}
</style>