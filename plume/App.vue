<script>
	import Bmob from '@/components/Bmob-2.2.3.min.js'
export default {
	onLaunch: function() {
		console.log('App Launch');
		Bmob.initialize('b6aa4e3312a8b1e6', 'xuyin1');
		setTimeout(() => {
			uni.setTabBarBadge({
				index: 1,
				text: '31'
			});
			uni.showTabBarRedDot({
				index: 2
			});

		}, 1000);
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
	@import "colorui/main.css";
	@import "colorui/icon.css";
/*每个页面公共css */
</style>
