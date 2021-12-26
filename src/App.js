import { useCallback, useEffect, useState } from 'react';
import { dbService } from './Firebase';
import './App.css';
import TodoList from './components/TodoList';
import TodoListTemplate from './components/TodoListTemplate';
import TodoListWrite from './components/TodoListWrite';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [lastId, setLastId] = useState(0);

  useEffect(() => {
    console.log('loading...');
    getTodoList();
  }, []);

  const getTodoList = async () => {
    await dbService
              .collection("todoItems")
              .orderBy('id', 'desc')
              .onSnapshot(response => {
                if(0 < response.size) {
                  setTodoList(response.docs
                                        .map(doc => doc.data())
                                        .filter(data => data.remove !== true)
                              );
                  return;
                }
                console.log('데이터가 존재하지 않습니다.');
              });
  }

  useEffect(()=>{
    if(0 < todoList.length) {
      setLastId(todoList[0].id);
    }
  },[todoList]);

  const onWriteTodo = useCallback(text => {
      const item = {
        id: lastId+1,
        text,
        done: false,
        remove: false
      }
      addTodo(item);
    }
  );

  const addTodo = async (data) => {
    await dbService
              .collection("todoItems")
              .add(data)
              .then(() => {
                console.log("Document successfully written!");
              })
              .catch(error => {
                console.error("Error writing document: ", error);
              });
  }

  const onRemoveTodo = (id) => {
    // remove를 true로 업데이트하기
    //  dbService
    //         .collection("todoItems")
    //         .doc()
    //         .update()
    //         .then(() => {
    //           console.log("Document successfully remove!");
    //         })
    //         .catch(error => {
    //           console.error("Error remove document: ", error);
    //         });
  };

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
