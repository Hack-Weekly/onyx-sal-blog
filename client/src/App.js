import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import React, { useState } from 'react';

import Layout from "./Layout";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Post from "./pages/Post";
import Metrics from "./pages/Metrics";
import SearchBar from "./components/SearchBar";

function App() {
  const [visibleElements, setVisibleElements] = useState([]);

  const handleSearch = (results) => {
    console.log('Search results: ', results)

    const matchedIds = results.map((element) => element.getAttribute('data-id'));
    setVisibleElements(matchedIds);

    results.forEach((element) => {
        element.classList.add('highlight');
    })
}

  return (
    <Router>
      <Layout>
        <SearchBar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Blog visibleElements={visibleElements} />} />
          <Route path="/about" element={<About />} />
          <Route path="/post" element={<Post />} />
          <Route path="/metrics" element={<Metrics />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
