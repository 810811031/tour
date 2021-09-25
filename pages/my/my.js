const app = getApp()

Page({
	data: {
		list: [
			{
				icon: '/assets/images/my_1.png',
				text: '个人信息',
				path: ''
			},
			{
				icon: '/assets/images/my_2.png',
				text: '我参的团',
				path: ''
			},
			{
				icon: '/assets/images/my_3.png',
				text: '我开的团',
				path: ''
			},
			{
				icon: '/assets/images/my_4.png',
				text: '我的收藏',
				path: ''
			}
		],
		userInfo: null
	},
	onShow: function() {
		// 设置自定 tabBar 激活状态
		this.getTabBar().setData({ selected: 2 })
		// 获取用户信息并渲染
		this.getUserInfoAndShow()
	},
	/**
	 * 获取用户信息并渲染
	 */
	getUserInfoAndShow: function () {
		console.log(app.globalData.userInfo)
		if (app.globalData.userInfo == null) return
		this.setData({
			userInfo: app.globalData.userInfo
		})
	},
	/**
	 * 点击获取头像后的回调
	 */
	getUserProfile: function () {
		const that = this
		wx.getUserProfile({
			desc: '授权获取您的头像和微信昵称',
			success: function (res) {
				app.globalData.userInfo = res.userInfo
				that.getUserInfoAndShow()
			}
		})
	},
})