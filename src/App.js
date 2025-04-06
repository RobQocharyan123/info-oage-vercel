import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Components/header";
import Info from "./Components/info";
import IntroGif from "./Assets/info/intro_pc.gif";
import AnimationPage from "./Components/animationPage";
import RoadMap from "./Components/roadMap";
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/info" element={<Info />} />
          <Route path="/roadmap" element={<RoadMap />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
        <AnimationPage />
      </div>
    </>
  );
}

export default App;
