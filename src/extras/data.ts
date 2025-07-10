import { CityWeatherDetails } from "./types";

// didn't get enough time to implement API fetch for detailed version, so I'll use this as a placeholder
export const mockCityDetailsList: CityWeatherDetails[] = [
  {
    city: { id: "Kyiv", country: "Ukraine", latitude: 50.45, longitude: 30.52 },
    currentWeather: {
      time: "2025-07-08T15:00",
      temperature: 29.6,
      weathercode: 5,
    },
    hourly: {
      time: [
        "2025-07-08T06:00",
        "2025-07-08T12:00",
        "2025-07-08T18:00",
        "2025-07-08T00:00",
      ],
      avgTemp: [15, 23, 29.8, 20],
      weathercode: [3, 73, 5],
    },
    daily: {
      time: ["2025-07-08", "2025-07-09", "2025-07-10"],
      avgTemp: [29.4, -15, 19],
      weathercode: [3, 73, 5],
    },
  },
  {
    city: { id: "London", country: "UK", latitude: 51.51, longitude: -0.13 },
    currentWeather: {
      time: "2025-07-08T15:00",
      temperature: 22.1,
      weathercode: 3,
    },
    hourly: {
      time: [
        "2025-07-08T06:00",
        "2025-07-08T12:00",
        "2025-07-08T18:00",
        "2025-07-08T00:00",
      ],
      avgTemp: [13, 18.5, 22, 17],
      weathercode: [2, 71, 3],
    },
    daily: {
      time: ["2025-07-08", "2025-07-09", "2025-07-10"],
      avgTemp: [21, 20, 18.4],
      weathercode: [3, 71, 2],
    },
  },
  {
    city: {
      id: "New York",
      country: "USA",
      latitude: 40.71,
      longitude: -74.01,
    },
    currentWeather: {
      time: "2025-07-08T15:00",
      temperature: 28.3,
      weathercode: 1,
    },
    hourly: {
      time: [
        "2025-07-08T06:00",
        "2025-07-08T12:00",
        "2025-07-08T18:00",
        "2025-07-08T00:00",
      ],
      avgTemp: [19, 24, 28.3, 21],
      weathercode: [1, 1, 2],
    },
    daily: {
      time: ["2025-07-08", "2025-07-09", "2025-07-10"],
      avgTemp: [27, 26, 25],
      weathercode: [1, 1, 2],
    },
  },
  {
    city: { id: "Tokyo", country: "Japan", latitude: 35.68, longitude: 139.69 },
    currentWeather: {
      time: "2025-07-08T15:00",
      temperature: 31.4,
      weathercode: 2,
    },
    hourly: {
      time: [
        "2025-07-08T06:00",
        "2025-07-08T12:00",
        "2025-07-08T18:00",
        "2025-07-08T00:00",
      ],
      avgTemp: [25, 30, 31.4, 26],
      weathercode: [2, 5, 1],
    },
    daily: {
      time: ["2025-07-08", "2025-07-09", "2025-07-10"],
      avgTemp: [30, 29, 31],
      weathercode: [2, 3, 5],
    },
  },
  {
    city: { id: "Paris", country: "France", latitude: 48.85, longitude: 2.35 },
    currentWeather: {
      time: "2025-07-08T15:00",
      temperature: 24.8,
      weathercode: 3,
    },
    hourly: {
      time: [
        "2025-07-08T06:00",
        "2025-07-08T12:00",
        "2025-07-08T18:00",
        "2025-07-08T00:00",
      ],
      avgTemp: [14, 21, 24.8, 19],
      weathercode: [3, 71, 4],
    },
    daily: {
      time: ["2025-07-08", "2025-07-09", "2025-07-10"],
      avgTemp: [23, 24, 22],
      weathercode: [3, 73, 4],
    },
  },
  {
    city: { id: "Berlin", country: "Germany", latitude: 52.52, longitude: 13.40 },
    currentWeather: { time: "2025-07-08T15:00", temperature: 26.5, weathercode: 2 },
    hourly: {
      time: ["2025-07-08T06:00", "2025-07-08T12:00", "2025-07-08T18:00", "2025-07-08T00:00"],
      avgTemp: [17, 22.5, 26.5, 20],
      weathercode: [2, 2, 3],
    },
    daily: {
      time: ["2025-07-08", "2025-07-09", "2025-07-10"],
      avgTemp: [26, 27, 25],
      weathercode: [2, 3, 2],
    },
  },
  {
    city: { id: "Sydney", country: "Australia", latitude: -33.87, longitude: 151.21 },
    currentWeather: { time: "2025-07-08T15:00", temperature: 17.2, weathercode: 1 },
    hourly: {
      time: ["2025-07-08T06:00", "2025-07-08T12:00", "2025-07-08T18:00", "2025-07-08T00:00"],
      avgTemp: [10, 14, 17.2, 13],
      weathercode: [1, 1, 1],
    },
    daily: {
      time: ["2025-07-08", "2025-07-09", "2025-07-10"],
      avgTemp: [16, 17, 15],
      weathercode: [1, 1, 2],
    },
  },
  {
    city: { id: "Toronto", country: "Canada", latitude: 43.65, longitude: -79.38 },
    currentWeather: { time: "2025-07-08T15:00", temperature: 25.0, weathercode: 3 },
    hourly: {
      time: ["2025-07-08T06:00", "2025-07-08T12:00", "2025-07-08T18:00", "2025-07-08T00:00"],
      avgTemp: [16, 21, 25.0, 19],
      weathercode: [2, 3, 2],
    },
    daily: {
      time: ["2025-07-08", "2025-07-09", "2025-07-10"],
      avgTemp: [24, 23, 22],
      weathercode: [3, 2, 1],
    },
  },
  {
    city: { id: "Rome", country: "Italy", latitude: 41.90, longitude: 12.49 },
    currentWeather: { time: "2025-07-08T15:00", temperature: 30.2, weathercode: 5 },
    hourly: {
      time: ["2025-07-08T06:00", "2025-07-08T12:00", "2025-07-08T18:00", "2025-07-08T00:00"],
      avgTemp: [20, 27, 30.2, 24],
      weathercode: [3, 5, 4],
    },
    daily: {
      time: ["2025-07-08", "2025-07-09", "2025-07-10"],
      avgTemp: [30, 31, 29],
      weathercode: [5, 4, 3],
    },
  },
  {
    city: { id: "Buenos Aires", country: "Argentina", latitude: -34.60, longitude: -58.38 },
    currentWeather: { time: "2025-07-08T15:00", temperature: 14.9, weathercode: 1 },
    hourly: {
      time: ["2025-07-08T06:00", "2025-07-08T12:00", "2025-07-08T18:00", "2025-07-08T00:00"],
      avgTemp: [7, 11, 14.9, 10],
      weathercode: [1, 1, 2],
    },
    daily: {
      time: ["2025-07-08", "2025-07-09", "2025-07-10"],
      avgTemp: [14, 13, 12],
      weathercode: [1, 1, 2],
    },
  },
];
