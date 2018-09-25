<template>
	<div class="lyc container">
		<ul>
			<li v-for="(item,index) in lyclData" class="img-item">
				<img :src="item.src" :alt="item.alt" />
			</li>
		</ul>
	</div>
</template>

<script>
export default {
		name: 'lyc',
		data() {
			return {
				lyclData:''
			}
		},
		created(){
			var _this = this;
			_this.$axios('static/json/lyc.json').then(res => {
				_this.lyclData = res.data.data;
			}).catch(err => {
				console.log(err)
			})
		}
	}
</script>

