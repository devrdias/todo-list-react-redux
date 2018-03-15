import React from 'react';

const Counter = ({ todos }) => (
    <div>
        <div>
            {(todos.length > 0)
                ? <h2> Você tem {todos.length} todos </h2>
                : <h2> Você ainda não tem nehum todo</h2>
            }
        </div>
    </div>
)

export default Counter;