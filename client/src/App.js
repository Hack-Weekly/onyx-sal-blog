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
import SingleBlogPost from "./components/singleBlogPost/index";

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/post" element={<Post />} />
          <Route path="/metrics" element={<Metrics />} />
          <Route path="/posts/:id" element={<SingleBlogPost /> } />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
