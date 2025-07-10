import { Navigate, Route, Routes } from "react-router";
import "./App.scss";
import { Home } from "./components/home";
import { Cities } from "./components/cities";
import { Details } from "./components/details";

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
