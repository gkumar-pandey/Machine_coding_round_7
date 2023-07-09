import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContenentPage from "./pages/ContenentPage";
import CountriesPage from "./pages/CountriesPage";
import DestinationDetailsPage from "./pages/DestinationDetailsPage";
import DestinationListPage from "./pages/DestinationListPage";

function App() {
  return (
    <div className=" bg-slate-800 text-white min-h-screen ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContenentPage />} />
          <Route path="/countries/:id" element={<CountriesPage />} />
          <Route
            path="/destination/:continentName/:countryName"
            element={<DestinationListPage />}
          />
          <Route
            path="/destinationDetails/:continentName/:countryName/:destinationName"
            element={<DestinationDetailsPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
