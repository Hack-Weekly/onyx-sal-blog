// Module Imports
import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import cryptoRandomString from 'crypto-random-string';

// Global State
import { useUserStore } from "./stores/userStore";

// CSS
import "./Layout.css";

// Components
import { Footer } from "./components/Footer";

// Utils
import { getAccessTokenGithub, getUserDataGithub } from "./utils/gitHubServices";

const login = () => {
  // Was going to use crypto but turns out it was deprecated
  const state = cryptoRandomString({
    length: 16,
    type: "hex",
  });

  localStorage.setItem("loginWith", "GitHub");
  window.location.assign(`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&scope=user&state=${state}&allow_signup=false&login=login`);
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Data
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
    path: "/metrics",
    label: "Metrics",
  },
];

const Login = () => {
  const [user, setUser] = useUserStore((state) => [state.user, state.setUser]);
  const loginWith = useRef(localStorage.getItem("loginWith"));

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParams = urlParams.get("code");

    const accessToken = localStorage.getItem("accessToken");

    if (codeParams && !accessToken) {
      getAccessTokenGithub(codeParams)
        .then(response => {
          localStorage.setItem("accessToken", response.access_token);

          getUserDataGithub(accessToken)
            .then(response => setUser(response));
        });
    } else if (codeParams && accessToken) {
      getUserDataGithub(accessToken)
        .then(response => {
          localStorage.setItem("accessToken", accessToken);
          setUser(response);
        });
    };
  }, [loginWith, setUser]);

  return (
    user === "" ?
    <span className="loginBtn" onClick={() => login()}>Login</span> :
    <img className="userLogo" src={user.avatar} alt="GitHub Logo" />
  );

};

const Layout = ({ children }) => {
  const pathname = useLocation().pathname;
  const isAdmin = useUserStore(state => state.user.isAdmin);

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

          { isAdmin ?
            <li style={{ fontWeight: pathname.startsWith("/post") ? 700 : 400 }}>
              <Link to="/post">Post</Link>
            </li> :
            null }

          <Login />

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
