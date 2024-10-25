import Form from "react-bootstrap/Form";
import { FaLinkedinIn } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import "./Footer.css";
const Footer: React.FC = () => {
  return (
    <section>
      <footer className="footer">
        <section className="footer-left">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="footer-left__title">Name</Form.Label>
              <Form.Control type="text" className=" footer-left__input" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="footer-left__title">Email</Form.Label>
              <Form.Control type="email" className="footer-left__input" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="footer-left__title">Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                className="footer-left__input"
              />
            </Form.Group>
          </Form>
          <a href="#" className="footer-btn">
            SEND MESSAGE
          </a>
        </section>
        <section className="footer-right">
          <section className="footer-right__container">
            <section className="footer-right__address">
              <h1 className="footer-right__title">ADDRESS</h1>
              <p className="footer-right__text">
                1234 Somewhere Road #87257 Nashville, TN 00000-0000
              </p>
            </section>
            <section className="footer-right__phone">
              <h1 className="footer-right__title">Phone</h1>
              <p className="footer-right__text">09125653427</p>
            </section>
            <section className="footer-right__email ">
              <h1 className="footer-right__title">Email</h1>
              <p className="footer-right__text">amoueifateme@gmail.com</p>
            </section>
            <section className="footer-right__icon">
              <h1 className="footer-right__title">Social</h1>
              <ul className="footer-right__list">
                <li>
                  <a
                    href="https://www.linkedin.com/in/fateme-amouie-aa1029324/?trk=public-profile-join-page"
                    className="footer-icon"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:amoueifateme@gmail.com"
                    className="footer-icon"
                  >
                    <BiLogoGmail />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/fatemeamouie/"
                    className="footer-icon"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/FatemeAmouei"
                    className="footer-icon"
                  >
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </section>
          </section>
        </section>
      </footer>
    </section>
  );
};
export default Footer;
