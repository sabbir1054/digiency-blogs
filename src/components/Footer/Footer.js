import React from "react";
import { Col, Row } from "react-bootstrap";
import Search from "../Search/Search";
import "./Footer.css";
const Footer = () => {
  const iconId = "fas fa-paper-plane";
  const searchHead = "";
  const place = "Send";
  return (
    <div id="footer" className="pt-5">
      <div className="container">
        <Row>
          <Col md={3}>
            <ul className="list-unstyled">
              <li>
                <h3>
                  <span className="color-text">Digi</span>ency
                </h3>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a
                  laoreet libero dis eget maecenas bibendum.
                </p>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <ul className="list-unstyled">
              <li>
                <h3 className="fw-bold">Company</h3>{" "}
              </li>
              <li>About us</li>
              <li>Our work</li>
              <li>Client</li>
              <li>Our blog</li>
            </ul>
          </Col>
          <Col md={3}>
            <ul className="list-unstyled">
              <li>
                <h3 className="fw-bold">Service</h3>{" "}
              </li>
              <li>Graphic Design</li>
              <li>Ui/Ux Design</li>
              <li>Web Development</li>
              <li>Web Hosting</li>
            </ul>
          </Col>
          <Col md={3}>
            <ul className="list-unstyled">
              <li>
                <h3 className="fw-bold">Newsletter</h3>{" "}
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                eget varius viverra in.
              </li>
              <li>
                <Search icon={iconId} head={searchHead} placeHolder={place} />
              </li>
            </ul>
          </Col>
        </Row>
      </div>
      <div className="copyRight text-center py-1">
        <p className="fs-5">Copyright 2021. All Right Reserved By Muhammad </p>
      </div>
    </div>
  );
};

export default Footer;
