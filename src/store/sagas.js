import {takeEvery,put} from 'redux-saga/effects'
import {GET_MANY_LIST} from './actionType';
import axios from 'axios';
import {getListAction} from './actionCreators';

function* mySaga(){
    // 监听捕获GET_MANY_LIST,监听到动作后执行getList
    yield takeEvery(GET_MANY_LIST,getList);
}
function* getList(){
    const res = yield axios.get('xxx');
    const action = getListAction(res.data.data);
    yield put(action);
}
export default mySaga;