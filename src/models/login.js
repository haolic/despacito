import { routerRedux } from 'dva/router';

export default {
    namespace: 'login',
    state: {
        isRightRotate: true,
    },
    effects: {
        * login({ payload }, { put }) {
            yield put(routerRedux.push('/index'))
        }
    },
    reducers: {
        changeRotate(state, { payload: trigger }) {
            state.isRightRotate = trigger === 'username' ? true : false;
            return { ...state };
        },
        register(state) {
            console.log('注册')
            return { ...state };
        }
    },
}