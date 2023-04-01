import styles from "./AddMovieForm.module.css";

function AddMovieForm() {
    return(
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img src="https://picsum.photos/536/354" alt="" className={styles.form__image}/>
                </div>
                <div className={styles.form__right}>
                    <h1 className={styles.form__title}>Add Movie</h1>
                    <form>
                        <div className={styles.form__inputgroup}>
                            <label htmlFor="title" className={styles.form__label}>Title</label>
                            <input type="text" name="title" id="title" className={styles.form__input} />
                        </div>
                        
                        <div className={styles.form__inputgroup}>
                            <label htmlFor="year" className={styles.form__label}>Year</label>
                            <input type="text" name="year" id="year" className={styles.form__input} />
                        </div>
                        
                        <button className={styles.form__button}>Submit</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AddMovieForm;