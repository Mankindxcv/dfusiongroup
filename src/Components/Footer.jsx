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
            <div className="contact-info">
              <p>Instagram: dfg_security_</p>
              <p>Facebook: dfggroup</p>
            </div>

            {/* Contact Info */}
            <div className="contact-info mt-4">
              <h4 className="footer-title">Contact Us</h4>
              <p className="footer-text">Email: dfusiongroupdfg@gmail.com</p>
              <p className="footer-text">Phone: 07367783778</p>
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