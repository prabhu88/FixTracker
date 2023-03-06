/*
 * Copyright (c) 2023 S. Prabhu (s.prabhu.mtech88@gmail.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
import {
    WEATHER_REQUEST, WEATHER_SUCCESS, WEATHER_FAILURE,
    FORECAST_REQUEST, FORECAST_SUCCESS, FORECAST_FAILURE
} from '../actionTypes'

// const API_KEY = process.env.WEATHER_API_KEY;
// const API_URL = `http://api.weatherapi.com/v1/`
const API_URL = `http://192.168.1.120:9001/weather/`
export const fetchWeather = (city, type) => {
    return async (dispatch) => {
        try {
            dispatch({ type: WEATHER_REQUEST });
            // const response = await fetch(`${API_URL}${type}.json?key=${API_KEY}&q=${city}`);
            const response = await fetch(`${API_URL}${type}?q=${city}`, {
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                },
            })
            const data = await response.json();            
            dispatch({
                type: WEATHER_SUCCESS,
                payload: data
            });
        } catch (error) {
            dispatch({
                type: WEATHER_FAILURE,
                payload: error.message
            });
        }
    };
};

export const fetchForecast = (city, days) => {
    return async (dispatch) => {
        try{
            console.log('called')
            dispatch({ type: FORECAST_REQUEST });
            const response = await fetch(`${API_URL}forecast?q=${city}&days=${days}`, {
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                },
            });
            const data = await response.json();            
            dispatch({
                type: FORECAST_SUCCESS,
                payload: data
            });
        }
        catch(error){
            dispatch({
                type : FORECAST_FAILURE,
                payload : error.message
            })
        }
    }
}
