<template>
  <div class="home">
    <router-view />
    <nav>
    	<ul class="footer">
    		<li class="footer-li"><router-link :to="{name:'list'}">新闻列表</router-link></li>
    		<li class="footer-li"><router-link :to="{name:'user'}">个人中心</router-link></li>
    	</ul>
    </nav>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  }
}
</script>

<style lang="stylus" scoped>
.footer {
	width 100%
	height 60px
	line-height 60px
	position fixed
	left 0
	bottom 0
	display flex
	justify-content space-around
}
.footer-li {
	flex 1
	text-align center
	border-top 1px solid #42b983
	a {
		color #42b983
		display block
		text-decoration none
	}
}
.footer .active {
	background #42b983
	color #fff
}

</style>
