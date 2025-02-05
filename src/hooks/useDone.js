import { ref, update } from 'firebase/database'
import { db } from '../firebase';

export const useDone = () => {
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
    }
}