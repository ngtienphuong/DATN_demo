import { SetCategory } from './constants'

const initState ={
    categoryId: '',
}

function Reducer(state, action){
    switch(action.type){
        case SetCategory:
            return{
                ...state,
                categoryId: action.payload
            }
            default:
                throw new Error(`Invalid action `)
    }
}

export {initState}
export default Reducer