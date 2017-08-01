import * as types from './type'

export default {

	/*头部信息*/
	show_head_succ: ({
		commit
	}) => {
		commit(types.HEAD_SHOW_SUCCESS);
	},
	show_head_fail: ({
		commit
	}) => {
		commit(types.HEAD_SHOW_FAIL);
	},
	/*loading*/
	hideLoading: ({
		commit
	}) => {
		commit(types.HIDE_LOADING)
	},
	showLoading: ({
		commit
	}) => {
		commit(types.SHOW_LOADING)
	},
	/*底部条*/
	hideFooter: ({
		commit
	}) => {
		commit(types.FOOTER_HIDE);
	},
	showFooter: ({
		commit
	}) => {
		commit(types.FOOTER_SHOW)
	}
}