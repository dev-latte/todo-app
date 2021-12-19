import React from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoListTemplate = styled.div`
    min-height: 320px;
    max-height: 513px;
    overflow-y: auto;
`;

const TodoList = ({todoList}) => {
    return (
        <TodoListTemplate>
            {
                todoList 
                && todoList.map(data => <TodoListItem item={data} key={data.id}/>)
            }
        </TodoListTemplate>
    );
}

export default TodoList;