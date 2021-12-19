import React from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoListTemplate = styled.div`
    min-height: 320px;
    max-height: 513px;
    overflow-y: auto;
`;

const TodoList = () => {
    return (
        <TodoListTemplate>
            <TodoListItem/>
            <TodoListItem/>
            <TodoListItem/>
            <TodoListItem/>
        </TodoListTemplate>
    );
}

export default TodoList;