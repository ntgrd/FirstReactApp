import {WEATHER_URL} from "../../utils/constants";

export const GET_WEATHER_REQUEST = "WEATHER::GET_REQUEST";
export const GET_WEATHER_SUCCESS = "WEATHER::GET_SUCCESS";
export const GET_WEATHER_FAILURE = "WEATHER::GET_FAILURE";

const gerWeatherRequest = () => ({
    type: GET_WEATHER_REQUEST,
});

const gerWeatherSuccess = (weather) => ({
    type: GET_WEATHER_SUCCESS,
    payload: weather
});

const getWeatherFailure = (error) => ({
    type: GET_WEATHER_FAILURE,
    payload: error
});
export const getWeather = () => async (dispatch) => {
    dispatch(gerWeatherRequest());
    try {
        const response = await fetch(WEATHER_URL);

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const result = await response.json();
        dispatch(gerWeatherSuccess(result));
    } catch (e) {
        console.log(e);
        dispatch(getWeatherFailure(e.message));
    }
};