import Navbar from './components/Navbar';
import Footer from './components/Footer';
import styles from './styles/page.module.css';

const Home = () => (
  <>
    <Navbar />
    <main className={styles.main}>
      <h1>Welcome to My Portfolio</h1>
      <p>This is the home page of my personal portfolio.</p>
    </main>
    <Footer />
  </>
);

export default Home;