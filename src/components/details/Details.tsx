import { Link, useParams } from "react-router";
import { getWeatherType, makeCapital } from "../../extras/helpers";
import { useEffect, useState } from "react";
import { CityWeatherDetails } from "../../extras/types";
import { mockCityDetailsList } from "../../extras/data";

// you get the city name from id in the browser
export const Details = () => {
  const { cityId } = useParams();
  const [info, setInfo] = useState<CityWeatherDetails | null>(null);

  const dayStates = ["morning", "afternoon", "evening", "night"];

  // handle unnecessary overflow
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const city = mockCityDetailsList.find((item) => item.city.id === cityId);
    setInfo(city as CityWeatherDetails);
  }, [cityId]);

  return (
    <section className="details">
      <div
        className={`details-background details-background__${getWeatherType(
          // change
          info?.currentWeather.weathercode
        )}`}
        aria-label="background image"
      />

      <header className="details-head">
        <Link to="/" className="link-home">
          Home
        </Link>

        <h2 className="details-temp">
          {/* change */}
          {info?.currentWeather.temperature}°C
        </h2>

        <button className="details-update">Update</button>
      </header>

      <main className="details-widgets">
        <article className="details-main-widget">
          {dayStates.map((state, i) => (
            <div className="details-daystate" key={state}>
              <div
                className={`details-daystate-image details-daystate-image__${state}`}
              />

              <p className="details-daystate-temp">
                {info?.hourly.avgTemp[i]}°C
              </p>
            </div>
          ))}
        </article>

        <div className="details-dailies">
          {["Tue", "Wed", "Thu"].map((day, i) => (
            <div className="details-daily" key={day}>
              {/* change */}
              <p className="details-daily-day">{day}</p>

              <div className="details-daily-group">
                <div
                  className={`details-daily-icon details-daily-icon__${getWeatherType(
                    info?.daily.weathercode[i] as number
                  )}`}
                  aria-label="daily weather icon"
                />

                <p className="details-daily-temp">{info?.daily.avgTemp[i]}°C</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="details-footer">
        <h2 className="details-city">{makeCapital(cityId as string)}</h2>
      </footer>
    </section>
  );
};
