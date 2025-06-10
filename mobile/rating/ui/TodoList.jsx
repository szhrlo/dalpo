import React from "react";

import './TodoList.css';

function TodoList(props){
    const { list } = props;

    return (
        <div className="todoList">
            <div className="todoContainer">
                <div className="todoBox" style={{backgroundColor: (list[0][1] === 'not' ? '#D9D9D9' : '#6FA5EB')}}></div>
                <div>{list[0][0]}</div>
            </div>
            <div className="todoContainer">
                <div className="todoBox" style={{backgroundColor: (list[1][1] === 'not' ? '#D9D9D9' : '#6FA5EB')}}></div>
                <div>{list[1][0]}</div>
            </div>
            <div className="todoContainer">
                <div className="todoBox" style={{backgroundColor: (list[2][1] === 'not' ? '#D9D9D9' : '#6FA5EB')}}></div>
                <div>{list[2][0]}</div>
            </div>
        </div>
    )
}

export default TodoList;