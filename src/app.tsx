import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import TodoList from './TodoList';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo-list" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}
