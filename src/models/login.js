import { routerRedux } from 'dva/router';
import { register } from './../services/api';
import { message } from 'antd';

export default {
    namespace: 'login',
    state: {
        isRightRotate: true,
        isLoading: false,
    },
    effects: {
        * login({ payload }, { put }) {
            yield put(routerRedux.push('/index'));
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
        tips(state, { payload: data }) {
            if (data.code === 1) {
                message.success(data.msg);
            } else {
                message.warning(data.msg);
            }
            return { ...state }
        }
    },
}