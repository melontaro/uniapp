<template>
	<view>
		<view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon-homefill text-gray"></text>
				断食
			</view>
			<view class="content text-bold">选择一个来开始吧!</view>
			<view class="action">
				<text class="cuIcon-cardboardfill text-grey"></text>
				<text class="cuIcon-recordfill text-red"></text>
			</view>
		</view>
		<view class="padding radius text-center light " :class="'bg-olive'">
			<view class="cu-list menu-avatar comment solids-top ">
				<view class="cu-item bg-gradual-green padding radius text-center shadow-blur" v-on:click="startClick(14)"> 
					<!--view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view-->
					<view class=" content">
						<view class="margin-top-sm flex justify-between">
							<view class="text-white solid-bottom text-xxl padding">14-10</view>
							<view>
								<text class="cuIcon-appreciatefill text-red"></text>
								<text class="cuIcon-appreciatefill text-red margin-left-sm"></text>
								<text class="cuIcon-appreciatefill text-white margin-left-sm"></text>
								<text class="cuIcon-appreciatefill text-white margin-left-sm"></text>
								<text class="cuIcon-appreciatefill text-white margin-left-sm"></text>
							</view>
						</view>
						<view class="uni-flex uni-column">
							<view class="flex-item flex-item-V uni-bg-red">14小时禁食</view>
							<view class="flex-item flex-item-V uni-bg-green">10小时用餐</view>
						</view>
					</view>
				</view>

				<view class="cu-item bg-gradual-blue padding radius text-center shadow-blur margin-tb" v-on:click="startClick(16)">
					<!--view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view-->
					<view class=" content">
						<view class="margin-top-sm flex justify-between">
							<view class="text-white solid-bottom text-xxl padding">16-8</view>
							<view>
								<text class="cuIcon-appreciatefill text-red"></text>
								<text class="cuIcon-appreciatefill text-red margin-left-sm"></text>
								<text class="cuIcon-appreciatefill text-red margin-left-sm"></text>
								<text class="cuIcon-appreciatefill text-white margin-left-sm"></text>
								<text class="cuIcon-appreciatefill text-white margin-left-sm"></text>
							</view>
						</view>
						<view class="uni-flex uni-column">
							<view class="flex-item flex-item-V uni-bg-red">16小时禁食</view>
							<view class="flex-item flex-item-V uni-bg-green">8小时用餐</view>
						</view>
					</view>
				</view>

				<view class="cu-item bg-gradual-purple padding radius text-center shadow-blur margin-tb" v-on:click="startClick(18)">
					<!--view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view-->
					<view class=" content">
						<view class="margin-top-sm flex justify-between">
							<view class="text-white solid-bottom text-xxl padding">18-6</view>
							<view>
								<text class="cuIcon-appreciatefill text-red"></text>
								<text class="cuIcon-appreciatefill text-red margin-left-sm"></text>
								<text class="cuIcon-appreciatefill text-red margin-left-sm"></text>
								<text class="cuIcon-appreciatefill text-red margin-left-sm"></text>
								<text class="cuIcon-appreciatefill text-white margin-left-sm"></text>
							</view>
						</view>
						<view class="uni-flex uni-column">
							<view class="flex-item flex-item-V uni-bg-red">16小时禁食</view>
							<view class="flex-item flex-item-V uni-bg-green">8小时用餐</view>
						</view>
					</view>
				</view>

				<view class="cu-item bg-gradual-pink padding radius text-center shadow-blur margin-tb " v-on:click="startClick(20)">
					<!--view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view-->
					<view class=" content">
						<view class="margin-top-sm flex justify-between">
							<view class="text-white solid-bottom text-xxl padding">20-4</view>
							<view>
								<text class="cuIcon-appreciatefill text-red"></text>
								<text class="cuIcon-appreciatefill text-red margin-left-sm"></text>
								<text class="cuIcon-appreciatefill text-red margin-left-sm"></text>
								<text class="cuIcon-appreciatefill text-red margin-left-sm"></text>
								<text class="cuIcon-appreciatefill text-red margin-left-sm"></text>
							</view>
						</view>
						<view class="uni-flex uni-column">
							<view class="flex-item flex-item-V uni-bg-red">20小时禁食</view>
							<view class="flex-item flex-item-V uni-bg-green">4小时用餐</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		startClick: function(hours) {
			console.log(hours);
			uni.navigateTo({
				url: '/pages/abrosia/abrosiastart?hours='+hours
			});
		}
	}
};
</script>

<style></style>
