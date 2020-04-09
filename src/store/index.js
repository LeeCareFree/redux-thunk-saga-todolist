import { createStore,applyMiddleware,compose } from 'redux'  //  引入createStore方法
import thunk from 'redux-thunk';
import reducer from './reducer'    
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

// 使用增强函数
const composeFunc = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__? 
window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__({}):compose

const enhancer = composeFunc(applyMiddleware(sagaMiddleware));
// 让saga运行起来
sagaMiddleware.run(mySaga);
const store = createStore(
    reducer,
    enhancer
    ) // 创建数据存储仓库
export default store   //暴露出去