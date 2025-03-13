import styles from './Home.module.css';
import savings from '../../img/savings.svg';
import LinkButton from '../layout/LinkButton';

function Home() {
    return (
        <section className={styles.home_container}>

            <h1 className={styles.title}>
                Welcome to <span>Costs</span>
            </h1>

            <p className={styles.text}>
                Start managing your projects right now!   
            </p>

            <LinkButton text="Create Project" link="/newproject" />

            <img src={savings} alt="New project" />

        </section>
    )
}

export default Home;