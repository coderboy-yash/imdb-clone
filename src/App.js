import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movielist from "./components/movieList/movielist";
import Header from "./components/Header/Header";
import Home from "./pages/home/home";
import Movie from "./pages/movieDetail/movie";
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie></Movie>}></Route>
          <Route path="movies/:type" element={<Movielist />}></Route>
          <Route path="/*" element={<h1>Error page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
