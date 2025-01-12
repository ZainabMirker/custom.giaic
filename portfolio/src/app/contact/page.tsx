import styles from '../styles/Contact.module.css'; // Adjust the path based on your file structure
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Contact = () => {
  return (
    <>
    <Navbar />
    <div className={styles.container}>
      <h1>Contact Me</h1>
      <form className={styles.form}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={5} required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default Contact;