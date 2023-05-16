import React from 'react';
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About Us</h4>
            <p>We are an online food ordering system that makes it easy for you to order delicious meals from your favorite restaurants.</p>
          </div>
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <p>Phone: __+91934548****</p>
            <p>Email: manivannan****@gmail.com</p>
          </div>
          <div className="col-md-4">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <hr />
        <p className={styles.text}>© 2023 Arusuvai Online. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
