import "./App.css";
import GereoBoardDummy from "./Pages/GereoBoardDummy.jsx";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Welcome from "./Pages/Welcome";
import How from "./Pages/How";
import GereoBoard from "./Pages/GereoBoard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="/how" element={<How />} />
          <Route path="/gereoboard" element={<GereoBoard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
