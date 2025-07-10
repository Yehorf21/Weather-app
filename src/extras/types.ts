// base for city request
export interface City {
  id: string;
  latitude: number;
  longitude: number;
  country: string;
}

export interface CurrentWeather {
  temperature: number;
  weathercode: number;
  time: string;
}

// base for simple weather request
export interface Weather {
  city: City;
  currentWeather: CurrentWeather;
}

export interface Detailed {
  time: string[];
  avgTemp: number[];
  weathercode: number[];
}

// base for detailed weather request
export interface CityWeatherDetails extends Weather {
  hourly: Detailed;
  daily: Detailed;
}

