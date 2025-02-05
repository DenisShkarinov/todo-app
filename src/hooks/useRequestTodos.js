import { useEffect, useState } from "react";
import { ref, onValue } from 'firebase/database'
import { db } from '../firebase.js'

export const useRequestTodos = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const todosDbRef = ref(db, 'todos')

        return onValue(todosDbRef, (snapshot) => {
            const loadedProducts = snapshot.val();

            setTodos(loadedProducts)
        })
    }, []);

    return {
        todos,
        setTodos,

    }
}