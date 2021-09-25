const app = getApp()

Component({
	data: {
		selected: null,
		color: "#333333",
		selectedColor: "#F4C932",
		list: [
			{
				pagePath: "/pages/index/index",
				iconPath: "/assets/images/tab_index_unActive.png",
				selectedIconPath: "/assets/images/tab_index_active.png",
				text: "拼团"
			}, 
			{
				pagePath: "/pages/start/start",
				iconPath: "/assets/images/tab_start_unActive.png",
				selectedIconPath: "/assets/images/tab_start_active.png",
				text: "开团"
			}, 
			{
				pagePath: "/pages/my/my",
				iconPath: "/assets/images/tab_my_unActive.png",
				selectedIconPath: "/assets/images/tab_my_active.png",
				text: "我的"
			}
		]
	},
	methods: {
		switchTab(e) {
			const data = e.currentTarget.dataset
			const url = data.path
			this.setData({ selected: null })
			wx.switchTab({ url })
		}
	}
})