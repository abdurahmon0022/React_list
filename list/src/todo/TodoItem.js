import React from "react";
import PropTypes from 'prop-types'

const styles = {
    li:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItem: 'center',
        padding: '.5rem 1 rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem ({ todo, index, onChange }) {
    console.log('todo', todo);
    return(
        <li style={styles.li}>
            <span>
                <input type="checkbox" style={styles.input} onChange= {() => onChange(todo.id)} />
                <strong>{index+1}</strong>
                &nbsp;
                {todo.title}
            </span>
            <button className="rm">
                &times;
            </button>
            
            </li>
    )
}

TodoItem.propTypes = {
    todo:  PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem