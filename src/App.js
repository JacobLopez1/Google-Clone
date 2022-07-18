import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
// Hosted at https://clone-cf2c8.web.app

function App() {
  return (
    //BEM
    <div className="app">
      <Router>
        <Routes>
          <Route path="/search" element={<SearchPage />}/>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
