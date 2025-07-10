import { CityWeatherDetails, Weather } from "../../extras/types";
import { getWeatherType } from "../../extras/helpers";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { actions } from "../../store/reducers/favorites";

interface Props {
  info: CityWeatherDetails;
}

export const Card: React.FC<Props> = ({ info }) => {
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state.favorites);

  // handler functions

  const addFavorite = (id: string) => {
    const newFavs = [...favorites, id];

    dispatch(actions.setFavorites(newFavs));
    localStorage.setItem("favorites", JSON.stringify(newFavs));
  };

  const removeFavorite = (id: string) => {
    const newFavs = favorites.filter((itemId) => itemId !== id);

    dispatch(actions.setFavorites(newFavs));
    localStorage.setItem("favorites", JSON.stringify(newFavs));
  };

  const checkFavorite = (id: string) => {
    if (favorites.find((itemId) => itemId === id)) {
      removeFavorite(id);
      return;
    }

    addFavorite(id);
  };


  return (
    <article className="card">
      <button className="update-card">Update the info</button>

      <div className="main-card">
        <div className="card-top">
          <p className="card-temperature">
            {info?.currentWeather.temperature}°C
          </p>

          {/* change depending on weather code */}
          <div
            className={`card-weather-icon card-weather-icon__${getWeatherType(
              info?.currentWeather.weathercode as number
            )}`}
            aria-label="card weather icon"
          />
        </div>

        <h2 className="card-time">{info?.currentWeather.time.slice(-5)}</h2>

        <p className="card-city">
          {info?.city.id}, {info?.city.country}
        </p>

        <button
          className="card-button card-button__add"
          onClick={() => checkFavorite(info.city.id)}
        />
      </div>
    </article>
  );
};
