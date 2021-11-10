import { ADD_EVENT, DELETE_EVENT, SET_ERROR_MESSAGE, FETCH_START, FETCH_SUCCESS, FETCH_FAIL, SET_ID } from "../actions/eventActions";


const initialState = {
       events: [],
       id: null,
       isLoading: false,
       errorMessage: '' 
}

const eventReducer = (state = initialState, action ) => {
    switch(action.type){
        case(ADD_EVENT):
        const newEvent = {
            ...action.payload
        }
        return({
            ...state,
            events: [...state.events, newEvent],
            id: newEvent.potluck_id
        })
        case(DELETE_EVENT):
        return({
            ...state,
            events: state.events.filter(event=>(action.payload !== event.id))
        })
        case(SET_ID):
        return({
            ...state,
            id: action.payload
        })
        case(SET_ERROR_MESSAGE):
        return({
            ...state,
            errorMessage: action.payload
        })
        case(FETCH_START):
        return({
            ...state,
            events: [],
            isLoading: true,
            errorMessage: '',
        })
        case(FETCH_SUCCESS):
            return({
                ...state,
                events: action.payload,
                isLoading: false,
                errorMessage: '',
        })
        case(FETCH_FAIL):
            return({
                ...state,
                events: [],
                isLoading: false,
                errorMessage: action.payload
        })
        default:
            return state
    }
};


export default eventReducer;
