import { alert } from '../../components/common'

const app = getApp()

Page({
	data: {
		list: [
			{
				cover: '/assets/images/start_1.png',
				label: '拼行程',
				checked: false
			},
			{
				cover: '/assets/images/start_2.png',
				label: '拼住宿',
				checked: false
			},
			{
				cover: '/assets/images/start_3.png',
				label: '拼交通',
				checked: false
			},
			{
				cover: '/assets/images/start_4.png',
				label: '拼吃喝',
				checked: false
			},
			{
				cover: '/assets/images/start_5.png',
				label: '拼课程',
				checked: false
			},
			{
				cover: '/assets/images/start_6.png',
				label: '拼装备',
				checked: false
			}
		],
		checkedList: []
	},
	onShow: function() {
		this.getTabBar().setData({ selected: 1 })
	},
	/**
	 * 点击选中状态
	 * @param {*} e
	 */
	handleSelectCard: function (e) {
		const index = e.currentTarget.dataset.index
		this.data.list[index].checked = !this.data.list[index].checked
		if (this.data.list[index].checked) {
			this.data.checkedList.push(index)
		} else {
			const i = this.data.checkedList.indexOf(index)
			this.data.checkedList.splice(i, 1)
		}
		this.setData({ 
			list: this.data.list,
			checkedList: this.data.checkedList
		})
	},
	/**
	 * 提交分类结果
	 */
	handleSubmit: function () {
		if (this.data.checkedList.length == 0) {
			alert('温馨提示', '请最少选择一个分类进行下一步', '好哒')
		}
		console.log(this.data.checkedList)
	}
})