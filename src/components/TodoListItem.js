import React, { useState } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline, MdOutlineEdit, MdEdit } from "react-icons/md";
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
    input[type=text] {
        width: 90%;
        height: 19px;
        border: none;
        outline: none;
        border-bottom: 1px solid #adb5bd;
        margin-left: 0.5rem;
        font-size: 1rem;
        background-color: transparent;
        color: #dee2e6;
    }

`;

const TodolistEditBtn = styled.div`
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: #000;
    cursor: pointer;
    &:hover {
        color: #ff8787;
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

const TodoListItem = ({docId, item, onRemoveTodo, onToggleTodo, onUpdateTodo}) => {
    const {id, text, done} = item;
    const [edit, setEdit] = useState(false);
    const [editText, setEditText] = useState(text);

    const onChangeEdit = (e) => {
        setEditText(e.target.value);
    }

    return (
        <TodoListItemTemplate>
            { edit ?
                // checkbox 랑 input&test랑 컴포넌트 나누기
                <TodoListCheckbox className={done ? "checked" : ""}>
                    {done ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/> }
                    <input type="text" value={editText} onChange={onChangeEdit}/>
                </TodoListCheckbox>
            :
                <TodoListCheckbox className={done ? "checked" : ""} onClick={() => onToggleTodo(id)}>
                    {done ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/> }
                    <span>{text}</span>
                </TodoListCheckbox>   
            }

            <TodolistEditBtn className={edit ? "editable" : ""} onClick={() => setEdit(!edit)}>
                {edit ? <MdEdit onClick={() => onUpdateTodo(docId, {...item, text:editText})}/> : <MdOutlineEdit/>}
            </TodolistEditBtn>

            { !edit && 
                <TodolistRemoveBtn onClick={() => onRemoveTodo(docId)}>
                    <MdRemoveCircleOutline/>
                </TodolistRemoveBtn>
            }
        </TodoListItemTemplate>
    );
}

export default TodoListItem;