<template>
	<div class="userBox">
		<div>
			<img src="@/assets/logo.png" alt="">
		</div>
		<p v-text="username"></p>
		<p>欢迎来到个人中心</p>
		<router-link :to="{name:'add'}" class="addBtn">添加文章</router-link>
	</div>
</template>

<script>
	import store from '../store.js'
	export default {
		data(){
			return {
				username:''
			}
		},
		mounted (){
			this.username = localStorage.getItem('username');
		},
		store,
		methods:{
			
		}
	}
</script>

<style lang="stylus" scoped>
.userBox
	padding 10px
	p {
		margin 10px 0
	}
	.addBtn {
		height: 36px;
		line-height 36px
    margin-left: 10px;
    margin-right: 10px;
    display: block;
    background: #42b983;
    color:#fff;
    border-radius 6px;
    text-decoration:none;
    margin-top 30px;
	}
</style>