import { CHANGE_INPUT,ADD_ITEM, DELETE_ITEM, GET_LIST,GET_MANY_LIST } from './actionType';
import axios from 'axios';
export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
});
export const addItemAction = ()=>({
    type: ADD_ITEM,
});

export const deleteItemAction = (index) =>({
    type:DELETE_ITEM,
    index
});

export const getListAction = (data)=>({
    type: GET_LIST,
    data
});
export const getTodoList = ()=>{
    return (dispatch)=>{
        axios.get('xxx').then((res)=>{
            const data = res.data;
            const action = getListAction(data);
            dispatch(action);
        })
    }
}
export const getManyListAction = () =>({
    type: GET_MANY_LIST
});