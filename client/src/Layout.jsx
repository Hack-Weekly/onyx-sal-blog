import { Link, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import "./Layout.css";

const Layout = ({ children }) => {
  const pathname = useLocation().pathname;

  const navbarLinks = [
    {
      id: 1,
      path: "/",
      label: "Blog",
    },
    {
      id: 2,
      path: "/about",
      label: "About",
    },
    {
      id: 3,
      path: "/post",
      label: "Post",
    },
    {
      id: 4,
      path: "/metrics",
      label: "Metrics",
    },
  ];


  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return(
    <>

      
      <nav id="nav-bar">
      <Link to = "/">
        <h1><span>&gt; Onyx Salamander</span></h1>
        </Link>
        <ul>
          { navbarLinks.map(link => (
            <li
              key={link.id}
              style={{
                // Someone feel free to move this into the .css
                fontWeight: link.path === pathname ? 700 : 400
              }}
            >
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {children}
      {/* This is the footer component located on /component/Footer/index.js */}
      <Footer />

      <button className="sticky-button" onClick={scrollToTop}>
        <span>Back to top</span>
      </button>
    </>
    
  );
};

export default Layout;
