import React from "react";
import styled from "styled-components";

const TodoTemplate = styled.div`
    width: 512px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 6rem;
    border-radius: 3px;
    overflow: hidden;
`;

const AppTitle = styled.div`
    background-color: #22b8cf;
    color: #fff;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TodoListContents = styled.div`
    background-color: #fff;
`;

const TodoListTemplate = ({children}) => {
    return (
        <TodoTemplate>
            <AppTitle>일정 관리</AppTitle>
            <TodoListContents>{children}</TodoListContents>
        </TodoTemplate>
    )
}

export default TodoListTemplate;