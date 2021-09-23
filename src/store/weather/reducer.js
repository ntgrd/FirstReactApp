import {STATUSES} from "../../utils/constants";
import {GET_WEATHER_FAILURE, GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS} from "./actions";

const initialState = {
    list: {},
    request: {
        error: null,
        status: STATUSES.IDLE,
    },
};

export const weatherReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_WEATHER_REQUEST: {
            return {
                ...state,
                request: {
                    error: null,
                    status: STATUSES.REQUEST,
                },
            };
        }
        case GET_WEATHER_SUCCESS: {
            return {
                ...state,
                request: {
                    ...state.request,
                    status: STATUSES.SUCCESS,
                },
                list: payload,
            };
        }
        case GET_WEATHER_FAILURE: {
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