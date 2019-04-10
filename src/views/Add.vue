<template>
	<div class="addBox">
		<div class="form-group">
			<label for="title">标题</label>
			<input type="text" id="title" v-model="title">
		</div>
		<div class="form-group">
			<label for="content">内容</label>
			<textarea name="content" id="content" rows="10" v-model="content"></textarea>
		</div>
		<div class="btn-group">
			<button type="button" class="btn btn-deep" @click="ok()">确认</button>
			<button type="button" class="btn" @click="cancel()">取消</button>
		</div>
	</div>
</template>

<script>
	import store from '../store.js'
	export default {
		data(){
			return {
				title:'',
				content:''
			}
		},
		store,
		methods:{
			ok(){
				if(this.title != '' && this.content != '') {
					let date = new Date(new Date().getTime() + 8*3600*1000).toISOString().substr(0,19).replace('T',' ');
					let obj = {
						title:this.title,
						content:this.content,
						time:date,
						focus:false
					};
					store.commit('addItem',obj);
					this.$router.push('/home/list');
				}else {
					alert('标题和内容均不能为空');
				}
			},
			cancel(){
				this.$router.push('/home/user');
			}
		}
	}
</script>

<style lang="stylus" scoped>
.addBox {
	padding 10px
	text-align left
	box-sizing border-box
}
.form-group {
	width 100%
	box-sizing inherit
}
.form-group label {
	display block
	padding 4px 0
}
.form-group input,.form-group textarea {
	width 100%
	box-sizing inherit
}
.form-group input {
	border 1px solid #ccc
	height 30px
	border-radius 4px
	font-size 16px
	margin-bottom 10px
}
.form-group textarea  {
	border 1px solid #ccc
	border-radius 4px
	padding 10px
	font-size 16px
}
</style>