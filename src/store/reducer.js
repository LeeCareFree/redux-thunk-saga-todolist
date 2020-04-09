// 必须注意reducer必须是一个纯函数7


// 第一步创建仓库
//数据仓库里目前有两个数据
import {CHANGE_INPUT , ADD_ITEM , DELETE_ITEM, GET_LIST} from './actionType'
const defaultState = {
    inputValue:'',
    list:[
        '早上8点半起床',
        '早上9点吃早餐',
        '中午12点吃饭',
        '下午1点至5点写代码',
        '下午5点30做饭',
        '晚上8点至10点上课',
        '晚上10点半至12点和邱宝宝打视频'
    ]
}
// reducer可以接受state 绝不能修改state
export default (state=defaultState,action)=>{
    //store可以自动把state跟action 传递给reducer
    //reducer处理过传来的state之后 再把新state传递给store

    console.log(state,action)
    if(action.type === CHANGE_INPUT){
        // 在这里做个深拷贝
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }



    if(action.type === ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    if(action.type === GET_LIST){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data.data.list;// 复制新的list数组进去
        return newState;
    }
    //state 可以理解为所有数据
    return state
}




