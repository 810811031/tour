// app.js
App({
	globalData: {
		deviceInfo: null,					// 设备信息	
		userInfo: null,						// 用户信息
		unLoginUserInfo: null,				// 未授权时的换取 openId 的密匙数据
	},
	onLaunch: function () {
		// 获取系统信息
		this.getDeviceInfo()
		// 判断用户是否授权
		this.judgeUserSetting()
	},
	/**
	 * 获取设备信息并储蓄
	 */
	getDeviceInfo: function () {
		wx.getSystemInfo()
			.then(res => {
				this.globalData.deviceInfo = res
			})
	},
	/**
	 * 判断用户是否授权
	 */
	judgeUserSetting: function () {
		const app = this
		wx.getSetting({
		  	success: function (res) {
				if (!res.authSetting['scope.userInfo']) return
				app.getUserInfo()
			}
		})
	},
	/**
	 * 获取用户信息
	 */
	getUserInfo: function () {
		const app = this
		wx.getUserInfo({
			success: function (res) {
				const { nickName, gender, province } = res.userInfo
				if ( nickName == '微信用户' && gender == 0 && province == '') {
					app.globalData.unLoginUserInfo = res
				} else {
					app.globalData.userInfo = res.userInfo
				}
			}
		})
	}
})
