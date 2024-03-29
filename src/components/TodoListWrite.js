import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";

const TodoListWriteForm = styled.form`
    display: flex;
    background-color: #495057;

    input {
        background-color: transparent;
        outline: none;
        border: none;
        padding: 0.5rem;
        font-size: 1rem;
        color: #fff;
        &::placeholder {
            color: #dee2e6;
        }
        ${'' /* 버튼을 제외한 영역을 모두 차지하기 위한 css */}
        flex: 1; 
    }

    button {
        background-color: #868e96;
        outline: none;
        border: none;
        color: #fff;
        padding: 0 1rem;
        font-size: 1rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: 0.3s background-color ease-in;
        &:hover {
            background-color: #adb5bd;
        }
    }
`;

const TodoListWrite = ({onWriteTodo}) => {
    const [value, setValue] = useState("");

    const onChangeEvent = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(e => {
        onWriteTodo(value);
        setValue("");
        e.preventDefault(); // form 이벤트 방지
    }, [onWriteTodo, value]);

    return (
        <TodoListWriteForm onSubmit={onSubmit}>
            <input 
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChangeEvent}    
            />
            <button type="submit">
                <MdAdd/>
            </button>
        </TodoListWriteForm>
    );
}

export default TodoListWrite;