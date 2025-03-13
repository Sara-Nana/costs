import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Container from './Container';
import logo from '../../img/costs_logo.png';


function Navbar() {
  return (
    <nav className={styles.navbar}>
        <Container className={styles.navbar}>

          <Link to="/">
            <img src={logo} alt="Costs Logo" />
          </Link>

          <ul className={styles.list}>
            <li className={styles.item}><Link to="/">Home</Link></li>
            <li className={styles.item}><Link to="/Projects">Projects</Link></li>
            <li className={styles.item}><Link to="/Company">Company</Link></li>
            <li className={styles.item}><Link to="/contact">Contact</Link></li>
          </ul>

        </Container>
    </nav>
  );
}

export default Navbar;