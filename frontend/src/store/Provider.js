import { useReducer } from 'react'
import Context from './Context'
import Reducer, {initState} from './Reducer'
import logger from './logger'

function Provider({children}){
    const [state, dispatch] = useReducer(logger(Reducer), initState)
    return(
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider