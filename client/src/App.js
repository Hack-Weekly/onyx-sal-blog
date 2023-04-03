import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./Layout";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Post from "./pages/Post";
import Metrics from "./pages/Metrics";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Router>
      <Layout>
        <SearchBar />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/post" element={<Post />} />
          <Route path="/metrics" element={<Metrics />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
