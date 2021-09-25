const app = getApp()

Component({
	properties: {

	},
	data: {
		statusBarHeight: 0,
		footerPadding: 0
	},
	attached: function () {
		const { windowHeight, safeArea, statusBarHeight } = app.globalData.deviceInfo
		const footerPadding = windowHeight - safeArea.height - statusBarHeight
		this.setData({
			statusBarHeight,
			footerPadding
		})
	},
	methods: {

	}
})
