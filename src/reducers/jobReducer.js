import {
    GET_JOBS,
} from "../actions/types";

const INITIAL_STATE = {
    jobs: [],
    loading : false,
};

export default function (state = INITIAL_STATE, action){

    switch (action.type) {
        case GET_JOBS: {
            return {
                ...state,
                jobs: action.payload,
                loading: false
            };
        }
        default:
            return state;
    }
};