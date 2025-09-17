import { TYPES } from "../actions/actions";

export function reducer(state, action){
    switch (action.type) {
        case TYPES.INCREMENTAR: {
            return{
                ...state,  
                contador: state.contador + 1
            };
        }
        case TYPES.DECREMENTAR: {
                return{
                ...state, 
                contador: state.contador - 1
            };
        }    
        case TYPES.RESETEAR: {
            return{
                ...state,  
                contador: 0
            }
        }
        case TYPES.MOSTRAR: {
            return {
                ...state,  
                isVisible: !state.isVisible
            }
        }
        default:
            return state;
    }
}