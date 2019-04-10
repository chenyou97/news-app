<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/info">Info</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>
<style lang="stylus">
*
  margin 0
  padding 0
  list-style none
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
input,textarea {
  padding-left:6px;
  outline-color:#42b983;
}
.btn-group {
  display flex
  align-items center
  justify-content space-around
  margin-top 20px
}
.btn-group .btn {
  width 45%
  height 30px
  line-height 30px
  border-radius 6px
  border 1px solid #41B883;
  background #fff;
  color #41b883;
  outline:none
}
.btn-group .btn-deep {
  background #41B883;
  color #fff;
}
</style>
