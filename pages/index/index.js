import { alert } from '../../components/common'

const app = getApp()

Page({
	onShow: function() {
		this.getTabBar().setData({ selected: 0 })
	},
	/**
	 * 暂未开放提示
	 */
	handleNone: function () {
		alert('提示', '该功能暂未开放！敬请期待', '我知道了')
	}
})