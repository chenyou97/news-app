<template>
	<div>
		<div v-if="isLogin">
			<h1 class="title">欢迎登录</h1>
			<div class="input-group">
				<label for="username">用户名</label>
				<input type="text" id="username" v-model="username">
			</div>
			<div class="input-group">
				<label for="password">密码</label>
				<input type="password" id="password" v-model="password">
			</div>
			<div class="btn-group">
				<button type="button" @click="login()" class="btn btn-deep">登录</button>
				<button type="button" @click="reg()" class="btn">注册</button>
			</div>
		</div>
		<div v-else>
			<h1 class="title">请输入以下信息</h1>
			<div class="input-group">
				<label for="username">用户名</label>
				<input type="text" id="username" v-model="username">
			</div>
			<div class="input-group">
				<label for="password">密码</label>
				<input type="password" id="password" v-model="password">
			</div>
			<div class="input-group">
				<label for="repeat">再次密码</label>
				<input type="password" id="repeat" v-model="repeat">
			</div>
			<div class="btn-group">
				<button type="button" @click="ok()" class="btn btn-deep">确认</button>
				<button type="button" @click="cancel()" class="btn">取消</button>
			</div>
		</div>
	</div>
</template>

<script>
	import store from '../store.js'
	export default {
		store,
		data(){
			return {
				isLogin:true,
				username:'',
				password:'',
				repeat:''
			}
		},
		methods:{
			login (){
				if(this.username === localStorage.getItem('username') && this.password === localStorage.getItem('password')) {
					this.$router.push('/home/list');
				}else {
					this.password = '';
					alert('用户名密码不匹配');
				}
			},
			reg (){
				this.isLogin = false;
			},
			ok(){
				if(this.password == this.repeat && username !== '') {
					localStorage.setItem('username',this.username);
					localStorage.setItem('password',this.password);
					this.username = '';
					this.password = '';
					this.isLogin = true;
				}else {
					console.log('用户名为空或两次输入密码不匹配');
				}
			},
			cancel(){
				this.isLogin = true;
			}
		}
	}
</script>

<style lang="stylus" scoped>
.title
	font-size 16px
	padding 20px 0
.input-group{
	width 100%
	padding 14px
	display flex
	justify-content space-between
	box-sizing border-box
	align-items center
	input{
		width 75%
		border 1px solid #ccc
		height 30px
		border-radius 4px
	}
	label{
		width 20%
		text-align right
	}
}
</style>
