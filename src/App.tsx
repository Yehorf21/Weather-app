import { Navigate, Route, Routes } from "react-router";
import "./App.scss";
import { Home } from "./components/home";
import { Cities } from "./components/cities";
import { Details } from "./components/details";

/*

Tasks:

 * api handling
 * Home html set up
 * card base
 * cities base
 * home base
 * details base
 * icon sizes
 * add sounds to details menu


Ideas:

 * use react-responsive
 * add lazy-loading
 * add a loader
 * limit the number of cities available
 * make the sides in details more round
 * round temperature values up

Check-list:

 * Readme file
 * Jest
 * Explain some of your actions (details with graph, average temperature only)
 * check website performance
 * check all pages for any reduntant comments or code



*/

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="home" element={<Navigate to="/" />} />

          <Route path="cities">
            <Route index element={<Cities />} />

            <Route path=":cityId" element={<Details />} />
          </Route>
        </Route>

        {/* not found page can be added */}
        <Route path="*" element={null} />
      </Routes>
    </>
  );
}

export default App;
