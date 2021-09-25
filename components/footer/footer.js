const app = getApp()

Component({
	properties: {
		active: {
			type: String,
			value: '1'
		}
	},
	data: {
		footerPadding: 0,
		current: null,
		list: [
			{
				label: '拼团',
				activeIcon: '../../assets/images/tab_index_active.png',
				unActiveIcon: '../../assets/images/tab_index_unActive.png',
				path: '/pages/index/index'
			},
			{
				label: '开团',
				activeIcon: '../../assets/images/tab_start_active.png',
				unActiveIcon: '../../assets/images/tab_start_unActive.png',
				path: '/pages/start/start'
			},
			{
				label: '我的',
				activeIcon: '../../assets/images/tab_my_active.png',
				unActiveIcon: '../../assets/images/tab_my_unActive.png',
				path: '/pages/my/my'
			},
		]
	},
	attached: function () {
		const { windowHeight, safeArea, statusBarHeight } = app.globalData.deviceInfo
		const safePadding = windowHeight - safeArea.height - statusBarHeight
		this.setData({
			safePadding,
		})
	},
	methods: {
		/**
		 * 转跳到对应页面
		 * @params { * } e
		 */
		handleTo: function (e) {
			const index = e.currentTarget.dataset.index
			if (index == this.data.active) return
			const url = this.data.list[index].path
			wx.switchTab({ url })
			this.setData({ current: null })
			
		}
	}
})
