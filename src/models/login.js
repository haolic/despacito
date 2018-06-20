import { routerRedux } from 'dva/router';
import { register, login } from './../services/api';
import { message } from 'antd';

export default {
    namespace: 'login',
    state: {
        isRightRotate: true,
        isLoading: false,
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