import { useCallback, useEffect, useRef, useState } from 'react';
import { fbDbService } from './Firebase';
import './App.css';
import TodoList from './components/TodoList';
import TodoListTemplate from './components/TodoListTemplate';
import TodoListWrite from './components/TodoListWrite';

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    console.log('loading...');
    getTodoList();
  }, []);

  const getTodoList = async () => {
    await fbDbService
              .collection("todoItems")
              .orderBy('id', 'desc')
              .get()
              .then(response => {
                if(0 < response.size) {
                  setTodoList(response.docs.map(doc => doc.data()));
                  return;
                }
                console.log('데이터가 존재하지 않습니다.');
              });
  }

  // 여기부터 작업 > id 키를 셋팅해주는 작업
  const nextId = useRef(4);

  const onWriteTodo = useCallback(text => {
      console.log(text);
      console.log(nextId);
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
