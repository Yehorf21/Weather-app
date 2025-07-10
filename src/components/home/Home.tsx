import { Link } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Card } from "../card";
import { useEffect } from "react";
import { actions } from "../../store/reducers/favorites";
import { mockCityDetailsList } from "../../extras/data";


export const Home = () => {
  const { favorites } = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();

  // handler functions

  const setFavorites = (items: string[]) => {
    dispatch(actions.setFavorites(items));
  };

  const saved = localStorage.getItem("favorites");

  const getFavoritesDetailed = () => {
    const detailed = [];

    for (const city of mockCityDetailsList) {
      if (favorites.includes(city.city.id)) {
        detailed.push(city);
      }
    }

    return detailed;
  };

  useEffect(() => {
    if (saved) {
      setFavorites(JSON.parse(saved));
    } else {
      setFavorites([]);
    }
  }, []);
  
  //  cleanup after the Details page
  useEffect(() => {
    const returnOverflow = () => {
      document.body.style.overflow = "visible";
    };

    returnOverflow();

    return () => returnOverflow();
  }, []);

  return (
    <section className="home">
      <header className="home-head">
        <h1 className="logo">Weatherly.io</h1>
        <Link to="/cities">
          <img
            src="/public/go-to-cities.png"
            alt="link to cities"
            className="cities-link-image"
          />
        </Link>
      </header>

      <main>
        {favorites.length ? (
          <section
            className="cities"
            style={{ justifyContent: "space-between" }}
          >
            {getFavoritesDetailed().map((fav) => (
              <Card key={fav.city.id} info={fav} />
            ))}
          </section>
        ) : (
          <img className="home-image" src="/public/not-found-group.png" />
        )}
      </main>
    </section>
  );
};
