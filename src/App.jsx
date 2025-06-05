import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter basename="/movie-app">
      <MovieProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </MovieProvider>
    </BrowserRouter>
  );
}

export default App;
