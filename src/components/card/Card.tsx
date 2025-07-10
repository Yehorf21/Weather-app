import { CityWeatherDetails } from "../../extras/types";
import { getWeatherType } from "../../extras/helpers";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { actions } from "../../store/reducers/favorites";
import { useNavigate } from "react-router";

interface Props {
  info: CityWeatherDetails;
}

export const Card: React.FC<Props> = ({ info }) => {
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state.favorites);
  const navigate = useNavigate();

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

  const isInFavorites = (id: string) => {
    if (favorites.find((fav) => fav === id)) {
      return "remove";
    }

    return "add";
  };

  const handleDetails = (id: string) => {
    navigate(`/cities/${id.toLowerCase()}`);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <article className="card">
      <button
        className="update-card"
        onClick={() => handleDetails(info.city.id)}
      >
        Go to details
      </button>

      <div className="main-card">
        <div className="card-top">
          <p className="card-temperature">
            {info.currentWeather.temperature}°C
          </p>

          {/* change depending on weather code */}
          <div
            className={`card-weather-icon card-weather-icon__${getWeatherType(
              info.currentWeather.weathercode
            )}`}
            aria-label="card weather icon"
          />
        </div>

        <h2 className="card-time">{info?.currentWeather.time.slice(-5)}</h2>

        <p className="card-city">
          {info.city.id}, {info.city.country}
        </p>

        <button
          className={`card-button card-button__${isInFavorites(info.city.id)}`}
          onClick={() => checkFavorite(info.city.id)}
        />
      </div>
    </article>
  );
};
