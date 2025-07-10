import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { City, Weather } from "../../extras/types.ts";
import axios from 'axios';


const BASE_URL = "https://api.open-meteo.com";

export const fetchShortWeather = createAsyncThunk<Weather, City>(
  "weather/fetchShortWeather",
  async(city) => {
    const response = await axios.get(`${BASE_URL}/v1/forecast`, {
      params: {
        latitude: city.latitude,
        longitude: city.longitude,
        current_weather: true,
      }
    })

    return {
      city,
      currentWeather: {
        temperature: response.data.current_weather.temperature,
        weathercode: response.data.current_weather.weathercode,
        time: response.data.current_weather.time,
      }
    }
  }
)

interface WeatherState {
  data: Weather[];
  loading: boolean;
  error: string;
}

const initialState: WeatherState = {
  data: [],
  loading: false,
  error: '',
}

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    
  },
  extraReducers(builder) {
    builder
      .addCase(fetchShortWeather.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchShortWeather.fulfilled, (state, action) => {
        const index = state.data.findIndex(w => w.city.id === action.payload.city.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        } else {
          state.data.push(action.payload);
        }
        state.loading = false;
      })
      .addCase(fetchShortWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
        console.error("Weather fetch error:", state.error);
      });
    },

});

export default weatherSlice.reducer;
export const { actions } = weatherSlice;
