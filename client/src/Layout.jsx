import { Link, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";

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

  return(
    <>
      <nav id="nav-bar">
        <h1><span>&gt; Onyx Sal Blog</span></h1>
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
    </>
  );
};

export default Layout;
