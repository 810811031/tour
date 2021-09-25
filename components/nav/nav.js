const app = getApp()

Component({
	properties: {
		title: {
			type: String,
			value: "首页"
		}
	},
	data: {
		deviceStatusHeight: 0,
	},
	pageLifetimes: {
		show: function() {
			this.setData({
				deviceStatusHeight: app.globalData.deviceInfo.statusBarHeight
			})
		}
	}
})
