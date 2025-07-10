import { Link } from "react-router";
import { Card } from "../card";
import { mockCityDetails } from "../../extras/placeholder";


export const Cities = () => {

  return (
    <section className="cities-section">
      <header>
        <Link className="link-home" to="/">Home</Link>
      </header>

      <main className="cities">
        {mockCityDetails.map(city => (
          <Card key={city.city.id} info={city} />
        ))}
      </main>
    </section>
  )
};