import {STATUSES} from "../../utils/constants";
import {GET_ARTICLES_FAILURE, GET_ARTICLES_REQUEST, GET_ARTICLES_SUCCESS} from "./actions";

const initialState = {
    list: [],
    request: {
        error: null,
        status: STATUSES.IDLE,
    },
};

export const newsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ARTICLES_REQUEST: {
            return {
                ...state,
                request: {
                    error: null,
                    status: STATUSES.REQUEST,
                },
            };
        }
        case GET_ARTICLES_SUCCESS: {
            return {
                ...state,
                request: {
                    ...state.request,
                    status: STATUSES.SUCCESS,
                },
                list: payload,
            };
        }
        case GET_ARTICLES_FAILURE: {
            return {
                ...state,
                request: {
                    error: payload,
                    status: STATUSES.FAILURE,
                },
            };
        }
        default:
            return state;
    }
};