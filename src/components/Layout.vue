<template>
    <div>
        <headerNav></headerNav>
        <div class="main-container"></div>
    </div>
</template>

<script>
    import headerNav from '../components/header'
    export default {
    components:{
      headerNav
    }
  }
</script>

<style scoped>
	.main-container{
		min-width: 1650px;
		overflow-x: auto;  /*如果溢出框，则应该提供滚动机制*/
	}
</style>