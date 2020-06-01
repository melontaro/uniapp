<template>
	<view>
		<uni-section title="关于间歇禁食" type="line"></uni-section>
		<uni-collapse :accordion="true">
			<uni-collapse-item v-for="item in accordion" :key="item.id" :title="item.title" :show-animation="item.animation">
				<text class="content">{{ item.content }}</text>
			</uni-collapse-item>
		</uni-collapse>
	</view>
</template>

<script>
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	import uniSection from '@/components/uni-section/uni-section.vue'
	
	export default {
		components: {
			uniSection,
			uniCollapse,
			uniCollapseItem
		},
		data() {
			const listData = [{
					name: '基础用法',
					data: [{
							type: false,
							subName: '默认开启',
							open: true,
							content: '折叠内容主体，可自定义内容及样式'
						},
						{
							type: false,
							subName: '折叠内容',
							content: '折叠内容主体，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段问题。再次点击标题，折叠内容。'
						},
						{
							type: false,
							subName: '禁用状态',
							disabled: true,
							content: '折叠内容主体，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段问题。再次点击标题，折叠内容。'
						}
					]
				},
				{
					name: '添加动画效果',
					data: [{
						type: true,
						subName: '动画效果',
						showAnimation: true,
						content: '折叠内容主体，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段问题。再次点击标题，折叠内容。'
					}]
				}
			]
			return {
				list: listData,
				accordion: [{
						id: 0,
						title: '什么是间歇禁食',
						content: '（英语：Intermittent fasting，缩写：IF）是种间歇性的进食方式通称，包括在一个期间内进行断食与进食循环。间歇性断食可能有助于体重减轻，产生相当于长期限制卡路里的效果。',
						animation: true
					},
					{
						id: 1,
						title: '间歇禁食适合谁',
						content: '手风琴效果',
						animation: true
					},
					{
						id: 2,
						title: '间歇性禁食健康吗?',
						content: '手风琴效果',
						animation: true
					}
				],
				extraIcon: {
					color: '#4cd964',
					size: '26',
					type: 'image'
				},
				id: 2
			}
		},
		methods: {
			change(e) {}
		}
	}
</script>

<style>

</style>
