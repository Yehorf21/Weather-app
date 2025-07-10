import type { CityWeatherDetails } from "./types";

export const mockCityDetails: CityWeatherDetails[] = [
  {
    city: {
      id: 1,
      name: "Kyiv",
      latitude: 50.45,
      longitude: 30.52,
      country: "Ukraine",
    },
    time: "2025-07-08T15:00",
    temperature: 27,
    weatherType: ["Clear", "Sunny"],

    hourly: {
      time: [
        "2025-07-08T12:00",
        "2025-07-08T13:00",
        "2025-07-08T14:00",
        "2025-07-08T15:00",
      ],
      temperature: [25, 26, 27, 27],
      weatherType: ["Sunny", "Sunny", "Sunny", "Clear"],
    },

    next3Days: {
      time: [
        "2025-07-09",
        "2025-07-10",
        "2025-07-11",
      ],
      temperature: [28, 26, 25],
      weatherType: ["Sunny", "Cloudy", "Rain"],
    },
  },
];
