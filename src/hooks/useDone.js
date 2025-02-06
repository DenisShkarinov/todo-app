import { ref, update } from 'firebase/database'
import { db } from '../firebase';

export const useDone = (todos) => {
    const completedTodos = Object.fromEntries(Object.entries(todos).filter(([id, { taskValue, done }]) => done === true))
    const activeTodos = Object.fromEntries(Object.entries(todos).filter(([id, { taskValue, done }]) => !done))
    const leftTodos = Object.entries(todos).filter(([id, {done, taskValue}]) => !done).length

    const requestDone = (id, done) => {
        const doneRef = ref(db, 'todos/' + id)

        update(doneRef, {
            done: !done,

        })
        .then(response => {
            console.log('done is changed: ', response)
        })
    }
    return {
        requestDone,
        completedTodos,
        activeTodos,
        leftTodos
    }
}