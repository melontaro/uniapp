<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">禁食准备</block>
		</cu-custom>
		<view class="cu-card case margin-tb">
			<view class="cu-item shadow">
				<view class="padding bg-white">
					<view class="flex  p-xs margin-bottom-sm mb-sm">
						<view class="flex-sub  padding-sm margin-xs radius">开始</view>
						<view class="flex-twice bg-grey padding-sm margin-xs radius">
							<view class="uni-list">
								<view class="uni-list-cell">
									<view class="uni-list-cell-db">
										<picker mode="multiSelector" @change="bindMultiPickerChange" :value="multiIndex" :range="multiArray">
											<view class="uni-input cuIcon-edit">
												{{ startTime }}
												<!--{{ multiArray[0][multiIndex[0]] }} {{ multiArray[1][multiIndex[1]] }}:{{ multiArray[2][multiIndex[2]] }}-->
											</view>
										</picker>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="flex  p-xs margin-bottom-sm mb-sm">
						<view class="flex-sub  padding-sm margin-xs radius">结束</view>
						<view class="flex-twice bg-grey padding-sm margin-xs radius">明天,11:20</view>
					</view>
					<view class="flex flex-direction"><button class="cu-btn bg-red margin-tb-sm lg">开始禁食</button></view>
				</view>
			</view>

			<view class="cu-item shadow">
				<view class="padding bg-grey">
					<view class="cu-bar solid-bottom margin-top">
						<view class="action">
							<text class="cuIcon-title text-blue"></text>
							禁食准备
						</view>
					</view>
					<view class="padding">
						<view class="text-left padding cuIcon-add">吃足够的蛋白质,比如牛奶、鸡蛋、肉、鱼、等.</view>
						<view class="text-left padding cuIcon-add">喝大量的水.</view>
						<view class="text-left padding cuIcon-add">吃天然的食物来帮助用餐期间控制食欲.</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import {getDate,getNearDate,getHours,getMinutes} from "@/common/util/datetools"
export default {
	onLoad(options) {
		console.log('--->' + options.hours);
		this.abrosiaTime = options.hours;
		this.startTime = this.multiArray[0][this.multiIndex[0]] + ' ' + this.multiArray[1][this.multiIndex[1]] + ':' + this.multiArray[2][this.multiIndex[2]];
	},
	data() {
		return {
			abrosiaTime: 0,
			startTime: '',
			endTime: '',

			startDate: getDate('start'),
			endDate: getDate('end'),
			date: getDate({
				format: true
			}),
			multiArray: [getNearDate(), getHours(), getMinutes()],

			multiIndex: [7, new Date().getHours(), new Date().getMinutes()]
		};
	},
	methods: {
		bindDateChange: function(e) {
			this.date = e.detail.value;
		},
		bindMultiPickerChange: function(e) {
			let dayIndex = e.detail.value[0];
			let dateSelect = this.multiArray[0][dayIndex];
			let hourSelect = e.detail.value[1];
			let minuteSelect = e.detail.value[2];
			console.log(':' + dateSelect);
			this.startTime = dateSelect + ' ' + hourSelect + ':' + minuteSelect;
			this.abrosiaTime + hourSelect;
			this.$forceUpdate();
		}
	}
};
</script>

<style></style>
