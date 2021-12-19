import { useCallback, useRef, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoListTemplate from './components/TodoListTemplate';
import TodoListWrite from './components/TodoListWrite';

function App() {
  // 임시 데이터 셋팅
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false
    }
  ]);

  const nextId = useRef(4);

  const onWriteTodo = useCallback(text => {
      const item = {
        id: nextId.current,
        text,
        checked: false
      }
      setTodoList(todoList.concat(item));
      nextId.current += 1;
    }
  );

  const onRemoveTodo = useCallback(id => {
    setTodoList(todoList.filter(data => data.id !== id));
  }, [todoList]);

  const onToggleTodo = useCallback(id => {
    setTodoList(
      todoList.map(data => 
        data.id === id ? { ...data, checked: !(data.checked) } : data
      ),
    );
  }, [todoList]);

  return (
    <TodoListTemplate>
      <TodoListWrite onWriteTodo={onWriteTodo}/>
      <TodoList todoList={todoList} onRemoveTodo={onRemoveTodo} onToggleTodo={onToggleTodo}/>
    </TodoListTemplate>
  );
}

export default App;
