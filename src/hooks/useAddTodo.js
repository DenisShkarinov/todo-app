import {useState} from "react";
import { ref, push } from 'firebase/database'
import { db } from '../firebase';

export const useAddTodo = (todos, setTodos) => {
    const [value, setValue] = useState('');

    const addTodos = () => {
        const todosDBRef = ref(db, 'todos')

        if (value.length > 0) {
            push(todosDBRef, {
                taskValue: value,
                done: false
            })
            setValue('');
        }
    }

    return {
        addTodos,
        value,
        setValue
    }
}