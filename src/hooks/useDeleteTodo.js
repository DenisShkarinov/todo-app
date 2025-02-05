import { ref, remove } from 'firebase/database'
import { db } from '../firebase'

export const useDeleteTodo = () => {
    const clearCompletedTodos = (id, done) => {
        const deleteTodoRef = ref(db, 'todos/' + id)
        if (done) {
            remove(deleteTodoRef)
                .then(response => {
                    console.log('Удалена задача: ', response)
                })
        }

    }
    const requestDeleteTodo = (id) => {
        const deleteTodoRef = ref(db, 'todos/' + id)

        remove(deleteTodoRef)
            .then(response => {
                console.log('Удалена задача: ', response)
            })

    }
    return {
        requestDeleteTodo,
        clearCompletedTodos
    }
}