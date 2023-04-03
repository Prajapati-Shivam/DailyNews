import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#fff'
          progress={progress}
          height={3}
        />

        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="top" country="in" category="top" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" country="in" category="entertainment" />} />
          <Route exact path="/politics" element={<News setProgress={setProgress} key="politics" country="in" category="politics" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" country="in" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key="science" country="in" category="sports" />} />
          <Route exact path="/world" element={<News setProgress={setProgress} key="world" country="in" category="world" />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App;