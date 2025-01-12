import styles from '../styles/About.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
    <Navbar />
    <div className={styles.container}>
      <h1>About Me</h1>
      <p>This is the About page of my portfolio. I am a passionate web developer with a focus on creating clean and user-friendly web applications.</p>
    </div>
    <Footer/>
    </>
  );
};

export default About;