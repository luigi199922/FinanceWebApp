import React from "react";
import classes from "./Footer.module.css";
import github from "../../resources/logos/github.png";
const logoWidth = 40;

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5>About</h5>
            <p>
              Finalytics is a side project created by Luis Preciado in React
              that visualizes data coming from Finnhub.io's API. The
              application's purpose is to make sense of economic and financial
              data for investors.
            </p>
          </div>
          <hr className="clearfix w-100 d-md-none pb-3" />
          <div className={classes.IconContainer}>
            <ul className={classes.Icons}>
              <li className="link d-inline-block">
                <a
                  href="https://github.com/luisalfonsopreciado"
                  rel="noopener noreferrer"
                  className="LinkU"
                  target="_blank"
                >
                  <img src={github} width={logoWidth} alt="github" />
                </a>
              </li>
            </ul>
          </div>

          {/* <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
