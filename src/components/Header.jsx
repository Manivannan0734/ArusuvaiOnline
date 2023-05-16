import { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css'
import Link from 'next/link';
const Header = () => {
  function handleAboutClick(e) {
    e.preventDefault();
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          
            <img style={{width:"20vw",height:"13vh"} }src="/images/logo.png" alt="My Logo"/>
        
        </Link>
      </div>
      <h1 className={styles.amertha}>Arusuvai Online</h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">
            Home
            </Link>
          </li>
          <li style={{cursor:"pointer"}} onClick={handleAboutClick} > 
            
              About
           
          </li>
          <li>
            <Link href="/ContactForm">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/Order">
              Order
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
