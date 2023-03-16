import styles from "./Hero.module.css";

function Hero() {
    return(
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Spiderman</h2>
                    <h3 className={styles.hero__genre}>Genre : Drama, Romance</h3>
                    <p className={styles.hero__description}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Culpa omnis quos nam reprehenderit mollitia iusto sequi maxime non cum quas.
                    </p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className={styles.hero__right}>
                    <img src="https://picsum.photos/536/354" alt="" className={styles.hero__image}/>
                </div>
            </section>
        </div>
    )
}

export default Hero;