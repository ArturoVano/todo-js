// import { TodoList } from './classes/todo-list.class.js';
// import { Todo } from './classes/todo.class.js';
import { Todo, TodoList } from './classes' // busca el index por defecto
import { crearTodoHtml } from './js/componentes';
import './styles.css';


export const todoList = new TodoList();

todoList.todos.forEach( crearTodoHtml );


console.log( todoList );
console.log( todoList.todos );
