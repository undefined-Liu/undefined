<template>
  <div id="app">
	<header-nav/>
    <router-view/>
	<page-footer/>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav'
import PageFooter from './components/PageFooter'
export default {
  name: 'App',
  components:{
	  HeaderNav,PageFooter
  }
}
</script>

