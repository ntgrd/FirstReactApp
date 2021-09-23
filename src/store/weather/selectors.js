import {STATUSES} from "../../utils/constants";

export const selectWeatherLoading = (state) => state.weather.request.status === STATUSES.REQUEST;
export const selectWeather = (state) => state.weather.list;
export const selectWeatherError = (state) => state.weather.request.error;
