<template>
	<view >
		<abrosia v-if="PageCur=='abrosia'" class="margin-bottom-xl" ></abrosia>
		<plan v-if="PageCur=='plan'"  class="margin-bottom-xl"></plan>
		<learn v-if="PageCur=='learn'"  class="margin-bottom-xl"></learn>
		<me v-if="PageCur=='me'"  class="margin-bottom-xl"></me>
		
		<view class="cu-bar tabbar bg-white shadow foot ">
			<view class="action" @click="NavChange" data-cur="abrosia">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/img/tabbar/abrosia' + [PageCur=='abrosia'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='abrosia'?'text-green':'text-gray'">断食</view>
			</view>
			<view class="action" @click="NavChange" data-cur="plan">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/img/tabbar/plan' + [PageCur == 'plan'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='plan'?'text-green':'text-gray'">计划</view>
			</view>
			<view class="action" @click="NavChange" data-cur="learn">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/img/tabbar/learn' + [PageCur == 'learn'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='learn'?'text-green':'text-gray'">学习</view>
			</view>
			<view class="action" @click="NavChange" data-cur="me">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/img/tabbar/me' + [PageCur == 'me'?'_cur':''] + '.png'"></image>
					<view class="cu-tag badge"></view>
				</view>
				<view :class="PageCur=='me'?'text-green':'text-gray'">我的</view>
			</view>
		</view>
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			PageCur: 'abrosia'
		};
	},
	methods: {
		NavChange: function(e) {
			this.PageCur = e.currentTarget.dataset.cur;
		}
	}
};
</script>

<style></style>
