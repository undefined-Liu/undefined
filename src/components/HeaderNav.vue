<template>
	<div class="header">
		<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
		background-color="#393D49" text-color="#fff" active-text-color="#5FB878">
			<el-menu-item index="1">柠檬之恋</el-menu-item>
			<el-submenu index="2">
				<template slot="title">相册</template>
				<el-menu-item index="nmzl"><router-link :to="urlData.index">柠檬之恋</router-link></el-menu-item>
				<el-menu-item index="lsc"><router-link :to="urlData.LSC">LSC</router-link></el-menu-item>
				<el-menu-item index="lyc"><router-link :to="urlData.LYC">LYC</router-link></el-menu-item>
			</el-submenu>
		</el-menu>
	</div>
</template>

<script>
export default {
	name: 'HeaderNav',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App',
			activeIndex: '1',
			activeIndex2: '1',
			urlData:{
				index:'/',
				LSC:'/LSC',
				LYC:'/LYC'
			}
		}
	},
	methods: {
		handleSelect(key, keyPath) {
			//console.log(key, keyPath);
		}
	}
}
</script>


