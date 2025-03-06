import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp, FaTiktok, FaCircle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="text-center text-md-start">
          {/* Logo and Description */}
          <Col md={3} className="footer-logo">
            <h3 className="footer-brand">DFG Security</h3>
            <p className="footer-text">
              Providing innovative security solutions to protect your business and assets.
            </p>
          </Col>

          <Col md={3}>
            <h4 className="footer-title">Certifications</h4>
            <p className="footer-text"><FaCircle size={8} className="me-2" /> Security Industry Authority Approved Contractor</p>
            <p className="footer-text"><FaCircle size={8} className="me-2" /> SafeContractor Approved Contractor</p>
            <p className="footer-text"><FaCircle size={8} className="me-2" /> CHAS Approved Contractor</p>
            <p className="footer-text"><FaCircle size={8} className="me-2" /> CCTV Systems</p>
            <p className="footer-text"><FaCircle size={8} className="me-2" /> Intruder Alarm Systems</p>
            <p className="footer-text"><FaCircle size={8} className="me-2" /> ISO 14001</p>
            <p className="footer-text"><FaCircle size={8} className="me-2" /> ISO 9001</p>
          </Col>

          <Col md={3}>
            <h4 className="footer-title">Sectors</h4>
            <p className="footer-text"><FaCircle size={8} className="me-2" /> Warehouse</p>
            <p className="footer-text"><FaCircle size={8} className="me-2" /> Construction</p>
            <p className="footer-text"><FaCircle size={8} className="me-2" /> Corporate</p>
            <p className="footer-text"><FaCircle size={8} className="me-2" /> Industrial</p>
            <p className="footer-text"><FaCircle size={8} className="me-2" /> Retail</p>
            <p className="footer-text"><FaCircle size={8} className="me-2" /> Residential</p>
            <p className="footer-text"><FaCircle size={8} className="me-2" /> Site Security</p>
          </Col>

          {/* Social Media Links */}
          <Col md={3}>
            <h4 className="footer-title">Stay Connected</h4>
            <p className="footer-text">Follow us on our social media platforms.</p>
            <div className="social-icons d-flex gap-3 mt-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link"><FaFacebook /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link"><FaLinkedin /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link"><FaInstagram /></a>
              <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="social-link"><FaWhatsapp /></a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-link"><FaTiktok /></a>
            </div>

            {/* Contact Info */}
            <div className="contact-info mt-4">
              <h4 className="footer-title">Contact Us</h4>
              <p className="footer-text">Email: info@dfgsecurity.com</p>
              <p className="footer-text">Phone: +254 700 123 456</p>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider mt-4" />
        <p className="footer-copyright text-center">
          © {new Date().getFullYear()} DFG Security. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;