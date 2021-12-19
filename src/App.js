import './App.css';
import TodoList from './components/TodoList';
import TodoListTemplate from './components/TodoListTemplate';
import TodoListWrite from './components/TodoListWrite';

function App() {
  return (
    <TodoListTemplate>
      <TodoListWrite/>
      <TodoList/>
    </TodoListTemplate>
  );
}

export default App;
