import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './Components/header';
import Info from './Components/info';
import IntroGif from './Assets/info/intro_pc.gif';
import AnimationPage from './Components/animationPage';
import RoadMap from './Components/roadMap';
import { Suspense } from 'react';
import About from './Components/about';

// Loading fallback component
const Loading = () => (
  <div className="loading">
    <p>Loading...</p>
  </div>
);

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Info />} />
            <Route path="/info" element={<Info />} />
            <Route path="/roadmap" element={<RoadMap />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
        <AnimationPage />
      </div>
    </>
  );
}

export default App;
