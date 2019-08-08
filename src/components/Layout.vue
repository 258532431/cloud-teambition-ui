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
    }
  }
</script>

<style scoped>
  .container {
    min-width: 100%;
    min-height: 100%;
  }
	.main-container{ 
    min-height: 100%;
		min-width: 1650px;
		overflow-x: auto;  /*如果溢出框，则应该提供滚动机制*/
    margin-top: 1px;
    background-color: #FFFFFF;
	}
</style>