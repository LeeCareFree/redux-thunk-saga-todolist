import React from 'react';
import 'antd/dist/antd.css'
import { Input , Button , List } from 'antd'

const TodoListUI = (props)=>{
    return ( 
        <div style={{margin:'10px'}}>
            <div>
                <Input  
                    style={{ width:'330px', margin:'0 10px'}}
                    onChange={props.changeInputValue}
                    value={props.inputValue}
                />
                <Button 
                    type="primary"
                    onClick={props.clickBtn}
                >增加</Button>
            </div>
            <div style={{margin:'10px',width:'400px'}}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item,index)=>(<List.Item>{item}
                    <Button style={{marginLeft:'20px'}} type='primary' onClick={()=>{props.deleteItem(index)}}>完成</Button>
                    </List.Item>)}
                />    
            </div>
        </div>
     );
}
export default TodoListUI;