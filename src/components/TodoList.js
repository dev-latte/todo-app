import React from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoListTemplate = styled.div`
    min-height: 320px;
    max-height: 513px;
    overflow-y: auto;
`;

const TodoList = ({todoList, onRemoveTodo, onToggleTodo, onUpdateTodo}) => {
    return (
        <TodoListTemplate>
            {
                todoList 
                && todoList.map(doc => 
                    <TodoListItem
                        key={doc.data.id} 
                        docId={doc.id}
                        item={doc.data} 
                        onRemoveTodo={onRemoveTodo}
                        onToggleTodo={onToggleTodo} 
                        onUpdateTodo={onUpdateTodo}   
                    />)
            }
        </TodoListTemplate>
    );
}

export default TodoList;