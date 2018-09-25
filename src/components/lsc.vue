<template>
	<div class="lsc container">
		<ul>
			<li v-for="(item,index) in lscData" class="img-item">
				<img :src="item.src" :alt="item.alt" />
			</li>
		</ul>
	</div>
</template>

<script>
export default {
		name: 'lsc',
		data() {
			return {
				lscData:''
			}
		},
		created(){
			var _this = this;
			_this.$axios('static/json/lsc.json').then(res => {
				_this.lscData = res.data.data;
			}).catch(err => {
				console.log(err)
			})
		}
	}
</script>

