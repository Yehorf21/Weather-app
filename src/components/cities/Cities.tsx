import { Link } from "react-router";
import { Card } from "../card";
import { mockCityDetailsList } from "../../extras/data";

export const Cities = () => {
  return (
    <section className="cities-section">
      <header>
        <Link className="link-home" to="/">Home</Link>
      </header>

      <main className="cities">
        {mockCityDetailsList.map(city => (
          <Card key={city.city.id} info={city} />
        ))}
      </main>
    </section>
  )
};