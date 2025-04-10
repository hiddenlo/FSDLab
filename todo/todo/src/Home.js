import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState({ id: '', task: '' });
    const [task, setTask] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/all')
            .then(res => setTodos(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleAdd = () => {
        if (task.trim()) {
            axios.post('http://localhost:3000/add', { task })
                .then(res => {
                    setTodos([...todos, res.data]);
                    setTask('');
                })
                .catch(err => console.log(err));
        }
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/todos/${id}`)
            .then(() => {
                setTodos(todos.filter(todo => todo.id !== id));
            })
            .catch(err => console.log(err));
    };

    const handleEdit = (id, task) => {
        setEditTodo({ id, task });
    };

    const handleSave = () => {
        axios.put(`http://localhost:3000/todos/${editTodo.id}`, { task: editTodo.task })
            .then(() => {
                setTodos(todos.map(todo => 
                    todo.id === editTodo.id ? { ...todo, task: editTodo.task } : todo
                ));
                setEditTodo({ id: '', task: '' });
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container">
            <h1>TODO</h1>

            <div className="input-section">
                <input
                    type="text"
                    placeholder="Enter your task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button onClick={handleAdd}>Add</button>
            </div>

            <div className="todo-list">
                {todos.length === 0 ? (
                    <p>No tasks</p>
                ) : (
                    todos.map(todo => (
                        <div key={todo.id} className="todo-row">
                            {editTodo.id === todo.id ? (
                                <>
                                    <input
                                        type="text"
                                        value={editTodo.task}
                                        onChange={(e) => setEditTodo({ ...editTodo, task: e.target.value })}
                                    />
                                    <button onClick={handleSave}>Save</button>
                                    <button onClick={() => setEditTodo({ id: '', task: '' })}>Cancel</button>
                                </>
                            ) : (
                                <>
                                    <span>{todo.task}</span>
                                    <button onClick={() => handleEdit(todo.id, todo.task)}>Edit</button>
                                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                                </>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Home;
