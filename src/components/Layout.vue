<template>
    <div class="container" id="app">
        <headerNav class="header"></headerNav>
        <menuNav class="menu"></menuNav>
        <div class="main-container">
          <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import headerNav from '../components/headerNav'
    import menuNav from '../components/menuNav'
    export default {
      components:{
        headerNav,
        menuNav
      },
      created(){
        //在页面加载时读取sessionStorage里的状态信息, 解决刷新页面state数据丢失问题
        if (sessionStorage.getItem("store") ) {
          this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
        }
        //在页面刷新时将vuex里的信息保存到sessionStorage里
        window.addEventListener("beforeunload",()=>{
          sessionStorage.setItem("store", JSON.stringify(this.$store.state))
        })
      }
    }
</script>

<style scoped>
  .container {
    min-width: 100%;
    min-height: 100%;
    padding-left: 0px;
    padding-right: 0px;
  }
	.main-container{ 
    min-height: 100%;
		min-width: 1600px;
		overflow-x: auto;  /*如果溢出框，则应该提供滚动机制*/
    margin-top: 1px;
    background-color: #FFFFFF;
	}
</style>