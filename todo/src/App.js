import "./App.css";
import Todo from "./components/Todo";
import Form from "./components/Form";
import Search from "./components/Search";
import { useState } from "react";
import { nanoid } from "nanoid";

function App(props) {
  const [todos, setTodos] = useState(props.todos);
  const [filter, setFilter] = useState("All");

  const addTodo = (name) => {
    const newtodo = { id: `${nanoid()}`, name, completed: false };
    setTodos([...todos, newtodo]);
    alert("New Task " + name + " is added to the List");
  };

  const TodoCompleted = (id) => {
    const updTodo = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updTodo);
  };

  const Tododelete = (id) => {
    alert("Dou You want to Delete ?");
    const Undeleted = todos.filter((todo) => id !== todo.id);
    setTodos(Undeleted);
  };
  const SearchTodo = {
    All: () => true,
    Pending: (todo) => !todo.completed,
    completed: (todo) => todo.completed,
  };
  const filterT = Object.keys(SearchTodo);

  const SearchTodos = filterT.map((name) => (
    <Search
      key={name}
      name={name}
      clicked={name === filter}
      setFilter={setFilter}
    />
  ));

  const todoList = todos
    .filter(SearchTodo[filter])
    .map((todo) => (
      <Todo
        id={todo.id}
        name={todo.name}
        completed={todo.completed}
        key={todo.id}
        TodoCompleted={TodoCompleted}
        tododelet={Tododelete}
      />
    ));

  return (
    <div className="App">
      <div className="todoap">
        <h1 className="text-xl text-center py-4">My ToDos</h1>
        <Form addTodo={addTodo} />

        <h2>{todoList.length} task remaining </h2>
        <div className="container">
          <div className="tasksList">
            <ul className="todolist" role={"list"}>
              {todoList}
            </ul>
          </div>
          <div className="Status bg-blue-200 pt-3">
            {/* <Search /> */}
            {SearchTodos}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
