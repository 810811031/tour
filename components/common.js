import { $wuxDialog } from '../miniprogram_npm/wux-weapp/index'

/**
 * alert 弹框
 * @param {*} title 
 * @param {*} content 
 */
export function alert(title = '提示', content = '提示内容', comfirmButtonText = '确定') {
    return new Promise(resolve => {
        $wuxDialog().alert({
            resetOnClose: true,
            title, content,
            confirmText: comfirmButtonText,
            onComfirm: e => resolve(e)
        })
    })
}