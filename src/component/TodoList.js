import React, { Component } from 'react';
import TodoListUI from './TodoListUI';
import { changeInputAction, deleteItemAction, addItemAction, getManyListAction } from '../store/actionCreators';
// 第三步引入之前创建好的store
import store from '../store'
class Todolist extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this);
        this.hanleStoreStateChange = this.hanleStoreStateChange.bind(this);
        this.clickBtn = this.clickBtn.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        //reducer传递给store新state store接受后state改变 立即执行subscribe()方法
        store.subscribe(this.hanleStoreStateChange);
    }
    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                deleteItem={this.deleteItem}
            />
        );
    }
    componentDidMount() {
        const action = getManyListAction();
        store.dispatch(action);
    }
    changeInputValue(e) {
        // 创建action命令 
        const action = changeInputAction(e.target.value);
        // 把命令传递给store
        store.dispatch(action)
    }
    // 这个函数被立即执行
    hanleStoreStateChange() {
        this.setState(store.getState())
    }
    clickBtn() {
        const action = addItemAction();
        store.dispatch(action)

    }
    deleteItem(index) {
        const action = deleteItemAction(index);
        store.dispatch(action)
    }

}

export default Todolist;