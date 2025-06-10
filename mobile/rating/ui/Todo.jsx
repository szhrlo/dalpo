import React from "react";

import TodoList from "./TodoList";

const styles = {
    todoContainer: {
        marginTop: '24px',
    },
    todoTitle: {
        fontSize: '10px',
        color: '#44474B',
        fontWeight: '400',
        marginBottom: '12px',
    },
}

function Todo(props){
    const { myLevel, myRating } = props;

    const level = ['초승달', '상현달', '보름달', '하현달', '그믐달'];

    const levelList = [
        [['초승달1', 'done'], ['초승달2', 'done'], ['초승달3', 'done']],
        [['상현달1', 'done'], ['상현달2', 'done'], ['상현달3', 'done']],
        [['한 달에 6번 문화생활하기', 'not'], ['후기 게시판에 10회 이상 남기기', 'not'], ['문화기록 5번 기록하기', 'done']]
    ]

    return (
        <div style={styles.todoContainer}>
            <div style={styles.todoTitle}>{level[myLevel + 1]} 등급까지 앞으로 {100-myRating}% 남았습니다</div>
            <TodoList list={levelList[myLevel+1]} />
        </div>
    )
}

export default Todo;