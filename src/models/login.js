import { routerRedux } from 'dva/router';
import { register, login } from './../services/api';
import { message } from 'antd';

message.config({
    top: 100,
    duration: .75,
})

export default {
    namespace: 'login',
    state: {
        isRightRotate: true,
        activeKey: 'tabLogin'
    },
    effects: {
        * login({ payload }, { put, call }) {
            const { data } = yield call(login, payload);
            if (data.code === 0) {
                message.warning(data.msg);
            } else {
                localStorage.setItem('userInfo', JSON.stringify(payload));
                yield put(routerRedux.push('/index'));
            }
        },
        * register({ payload: formData }, { put, call }) {
            yield put({ type: 'showLoading' });
            const { data } = yield call(register, formData);
            yield put({ type: 'tips', payload: data });
        }
    },
    reducers: {
        changeRotate(state, { payload: trigger }) {
            state.isRightRotate = trigger === 'username' ? true : false;
            return { ...state };
        },
        handleTabClick(state, { payload: tab }) {
            state.activeKey = tab;
            return { ...state };
        },
        tips(state, { payload: data }) {
            if (data.code === 1) {
                message.destroy()
                message.success(data.msg);
                state.activeKey = 'tabLogin'                
            } else {
                message.destroy()
                message.warning(data.msg);
            }
            return { ...state }
        }
    },
}