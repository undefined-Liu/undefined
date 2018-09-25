<template>
	<div class="nmzl container">
		<ul>
			<li v-for="(item,index) in nmzlData" class="img-item">
				<img :src="item.src" :alt="item.alt" />
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'nmzl',
		data() {
			return {
				nmzlData:''
			}
		},
		created(){
			var _this = this;
			_this.$axios('static/json/nmzl.json').then(res => {
				_this.nmzlData = res.data.data;
			}).catch(err => {
				console.log(err)
			})
		}
	}
</script>
