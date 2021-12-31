import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from "react-icons/md";
import styled from "styled-components";

const TodoListItemTemplate = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    &:nth-child(even) {
        background-color : #f8f9fa; 
    }
    & + & {
        border-top: 1px solid #dee2e6
    }
`;

const TodoListCheckbox = styled.div`
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
    svg {
        font-size: 1rem;
    }
    span {
        margin-left: 0.5rem;
        flex: 1;
    }
    &.checked {
        svg {
            color: #22b8cf;
        }
        span {
            color: #adb5bd;
            text-decoration: line-through;
        }
    }
`;

const TodolistRemoveBtn = styled.div`
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: #ff6b6b;
    cursor: pointer;
    &:hover {
        color: #ff8787;
    }
`;

const TodoListItem = ({docId, item, onRemoveTodo, onToggleTodo}) => {
    const {id, text, done} = item;
    return (
        <TodoListItemTemplate>
            <TodoListCheckbox className={done ? "checked" : ""} onClick={() => onToggleTodo(id)}>
                {done ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/> }
                <span>{text}</span>
            </TodoListCheckbox>
            <TodolistRemoveBtn onClick={() => onRemoveTodo(docId)}>
                <MdRemoveCircleOutline/>
            </TodolistRemoveBtn>
        </TodoListItemTemplate>
    );
}

export default TodoListItem;