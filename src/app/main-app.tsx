import "./main-app.scss";
import { Outlet } from "react-router-dom";

export function MainApp() {
  return (
    <div>
      <header className="app-header">
      <img src="/ghibli.png" alt="Studio Ghibli Logo" className="ghibli-logo" />
        <h1>GHIBLI FILMS SHOP</h1>
        <h2>Step into the World of Animation</h2>
      </header>

      <Outlet />

      <footer className="app-footer">
        <div className="contact-us">
          <h3>Contact Us</h3>
          <p>Email: info@ghiblifilms.com</p>
          <p>Phone: +123 456 7890</p>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainApp;
