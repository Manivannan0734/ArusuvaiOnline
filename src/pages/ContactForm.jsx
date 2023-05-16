import React from 'react';
import styles from '../styles/form.module.css';
import Header from '@/components/Header';

const ContactForm = () => {
  return (
    <div>
      <Header/>
    <div className={styles.container}>
     
      <form
        className={styles.form}
        method="post"
        action="mailto:your_email_address_here@example.com"
      >
        <img className={styles.ud} src="./images/contact.png" alt="" />
        <label htmlFor="message" className={styles.label}>
          Write your message:
        </label>
        <textarea id="message" name="message" className={styles.input}></textarea>
        <button type="submit" className={styles.button}>
          Send
        </button>
      </form>
    </div>
    </div>
  );
};

export default ContactForm;
