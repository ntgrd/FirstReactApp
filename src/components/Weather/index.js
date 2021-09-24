import {useEffect} from "react";
// import {PUBLIC_URL} from "../../utils/constants";
import {CircularProgress} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {selectWeather, selectWeatherError, selectWeatherLoading} from "../../store/weather/selectors";
import {getWeather} from "../../store/weather/actions";

export const Weather = () => {
        const dispatch = useDispatch();
    const error = useSelector(selectWeatherError);
    const loading = useSelector(selectWeatherLoading);
    const weather = useSelector(selectWeather);

    const reload = () => {
        dispatch(getWeather());
    };

    useEffect(() => {
        reload();
    }, []);

    return (
        <div>
            <h2>Weather: Moscow</h2>
            {error ? (
                <>
                    <h3>Error: {error}</h3>
                    <button onClick={reload}>Retry</button>
                </>
            ) : (<h4>
                    Current temperature: {weather.current_weather.temperature}C
                    <br/>
                    Current time: {weather.current_weather.time}
            </h4>

                )
            }
            {loading && <CircularProgress/>}
        </div>
    );
};