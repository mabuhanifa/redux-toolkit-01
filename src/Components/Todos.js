import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../Services/Actions/todosActions';

const Todos = () => {
    const { isLoading,todos,error } = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllTodos());
    }, []);

    return (
        <div>
           <h1>Todos App</h1>
              {isLoading && <h2>Loading...</h2>}
                {error && <h2>{error.message}</h2>}
                <section className='todo'>
                    {todos.map((todo) => (
                        <div key={todo.id}>
                            <h3>{todo.title}</h3>
                            <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
                        </div>))}
                </section>

        </div>
    );
};

export default Todos;