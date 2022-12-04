import { actionTypes } from "./actionTypes";

export const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    education: '',
    quntity: 1,
    feedback: '',
    term: false
}

export const reducer = (state, action) => {
    // console.log(action);

    switch (action.type) {
        case actionTypes.INPUT:
            return {
                ...state, [action.paylode.name]: action.paylode.value
            };
        case actionTypes.TOGGLE:
            return {
                ...state,
                term: !state.term
            };
        case actionTypes.INCREMENT:
            return {
                ...state,
                quntity: Number(state.quntity) + 1
            };
        case actionTypes.DECREMENT:
            return {
                ...state,
                quntity: Number(state.quntity) + 1
            }



        default: return state
    }

}
