import styles from "./AddMovieForm.module.css";
import { useState } from "react";
import { nanoid } from 'nanoid'
import Alert from "../Alert/Alert";

function AddMovieForm(props) {
    // destructin props
    const {movies, setMovies} = props;

    // Membuat state title
    const [title,setTitle] = useState("");

    // Membuat state date
    const [date,setDate] = useState("");

    // Membuat state image
    const [image,setImage] = useState("");

    // Membuat state genre
    const [genre,setGenre] = useState("");

    // Membuat function handleTitle
    function handleTitle(e) {
        setTitle(e.target.value);
    }

    function handleDate(e) {
        setDate(e.target.value);
    }

    function handleImage(e) {
        setImage(e.target.value);
    }

    function handleGenre(e) {
        setGenre(e.target.value);
    }

    // Membuat state title dan date error/empty
    const [isTitleError, setIsTitleError] = useState(false);
    const [isDateError, setIsDateError] = useState(false);

    // membuat form ketika disubmit
    function handleSubmit(e) {
        // mencegah perilaku default: refresh
        e.preventDefault();

        // jika title kosong, maka set error title true
        if (title === "") {
            setIsTitleError(true);
            // Jika date kosong, maka set error date true
        }else if(date === ""){
            setIsTitleError(false);
            setIsDateError(true);
        }else {
        // Siapkan movie yang ingin diinput
        const movie = {
            id: nanoid(),
            title : title,
            year : date,
            type: "Movie",
            // poster : "https://picsum.photos/300/400"
            poster : image,
            genre:genre
        }
        setMovies([...movies, movie]);
        setIsTitleError(false);
        setIsDateError(false);
        }
    }


    return(
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img src="https://picsum.photos/536/354" alt="" className={styles.form__image}/>
                </div>
                <div className={styles.form__right}>
                    <h1 className={styles.form__title}>Add Movie</h1>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.form__inputgroup}>
                            <label htmlFor="title" className={styles.form__label}>Title</label>
                            <input type="text" 
                            onChange={handleTitle}
                            name="title" 
                            id="title" 
                            className={styles.form__input} 
                            value={title} />
                            {/* 
                            Jika error title true : muncul error
                            Jika tidak, munculkan string kosong
                            */}
                            { isTitleError && <Alert>Title Wajib Diisi</Alert>}
                            
                        </div>
                        
                        <div className={styles.form__inputgroup}>
                            <label htmlFor="year" className={styles.form__label}>Year</label>
                            <input type="number" 
                            onChange={handleDate}
                            name="year" 
                            id="year" 
                            className={styles.form__input}
                            value={date}
                            />
                            { isDateError && <Alert>Date Wajib Diisi</Alert> }
                        </div>

                        <div className={styles.form__inputgroup}>
                            <label htmlFor="image">Image</label>
                            <input type="text"
                            onChange={handleImage}
                            name="image" 
                            id="image"
                            className={styles.form__input}
                            value={image}/>
                        </div>   

                        <div className={styles.form__inputgroup}>
                            <label htmlFor="genre">Genre</label>
                            <select id="genre" onChange={handleGenre} name="genre" className={styles.form__input}>
                                <option hidden>-Pilih Genre-</option>
                                <option value="action">Action</option>
                                <option value="horror">Horror</option>
                                <option value="drama">Drama</option>
                                <option value="romance">Romance</option>
                            </select>
                        </div>
                        <button className={styles.form__button}>Submit</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AddMovieForm;