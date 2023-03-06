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
import { WEATHER_REQUEST, WEATHER_SUCCESS, WEATHER_FAILURE, CLEAR_WEATHER } from '../actionTypes'
const weatherState = JSON.parse(localStorage.getItem("weatherState")) 
const initialState = weatherState ? {
    loading: false,
    data: weatherState,
    error: null
} : {
    loading: false,
    data: null,
    error: null
};
export default function (state = initialState, action) {
    switch (action.type) {
        case WEATHER_REQUEST:
            localStorage.removeItem('weatherState')
            return {
                ...state,
                loading: true,
                error: null
            };
        case WEATHER_SUCCESS:
            localStorage.setItem('weatherState', JSON.stringify(action.payload));            
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            };
        case WEATHER_FAILURE:
            localStorage.removeItem('weatherState')
            return {
                ...state,
                loading: false,
                data: null,
                error: action.payload
            };
        case CLEAR_WEATHER:
            localStorage.removeItem('weatherState')
            return {
                ...state,
                data: null,
                error: null
            };
        default:
            return state;
    }
};



