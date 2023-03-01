
function logger(Reducer){
    return (prevState, action) =>{

        const nextState = Reducer(prevState, action)

        return nextState
    }
}

export default logger