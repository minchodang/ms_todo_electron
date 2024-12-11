import React from 'react';

const TodoList: React.FC = () => {
  const todos = ['Buy groceries', 'Read a book', 'Exercise for 30 minutes'];

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Today's Todos</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ margin: '10px 0', fontSize: '18px' }}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
