import styles from "./AddMovieForm.module.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import Alert from "../Alert/Alert";

function AddMovieForm(props) {
  // destructin props
  const { movies, setMovies } = props;

  //   membuat state object
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    poster: "",
    genre: "",
  });

  //   Membuat fungsi handleChange untuk handle semua input form
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const [formValidate, setFormValidate] = useState({
    isTitleError: false,
    isDateError: false,
    isPosterError: false,
  });

  const { isTitleError, isDateError, isPosterError } = formValidate;

  // function handleValidate(e) {
  //   const {} = e.target;
  // }

  const { title, date, poster, genre } = formData;

  function validate() {
    // jika title kosong, maka set error title true
    if (title === "") {
      setFormValidate({
        ...formValidate,
        isTitleError: true,
      });
      return false;
      // Jika date kosong, maka set error date true
    } else if (date === "") {
      setFormValidate({
        ...formValidate,
        isTitleError: false,
        isDateError: true,
      });
      return false;
    } else if (poster === "") {
      setFormValidate({
        ...formValidate,
        isPosterError: true,
        isDateError: false,
      });
      return false;
    } else {
      setFormValidate({
        ...formValidate,
        isPosterError: true,
        isDateError: false,
      });
      return true;
    }
  }

  function addMovie() {
    // Siapkan movie yang ingin diinput
    const movie = {
      id: nanoid(),
      title: title,
      year: date,
      type: "Movie",
      // poster : "https://picsum.photos/300/400"
      poster: poster,
      genre: genre,
    };
    setMovies([...movies, movie]);
  }

  // membuat form ketika disubmit
  function handleSubmit(e) {
    // mencegah perilaku default: refresh
    e.preventDefault();
    validate() && addMovie();
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            src="https://picsum.photos/536/354"
            alt=""
            className={styles.form__image}
          />
        </div>
        <div className={styles.form__right}>
          <h1 className={styles.form__title}>Add Movie</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__inputgroup}>
              <label htmlFor="title" className={styles.form__label}>
                Title
              </label>
              <input
                type="text"
                onChange={handleChange}
                name="title"
                id="title"
                className={styles.form__input}
                value={title}
              />
              {/* 
              Jika error title true : muncul error
              Jika tidak, munculkan string kosong
              */}
              {isTitleError && <Alert>Title Wajib Diisi</Alert>}
            </div>

            <div className={styles.form__inputgroup}>
              <label htmlFor="date" className={styles.form__label}>
                Year
              </label>
              <input
                type="number"
                onChange={handleChange}
                name="date"
                id="date"
                className={styles.form__input}
                value={date}
              />
              {isDateError && <Alert>Date Wajib Diisi</Alert>}
            </div>

            <div className={styles.form__inputgroup}>
              <label htmlFor="poster">Image</label>
              <input
                type="text"
                onChange={handleChange}
                name="poster"
                id="poster"
                className={styles.form__input}
                value={poster}
              />
              {isPosterError && <Alert>Poster Wajib Diisi</Alert>}
            </div>

            <div className={styles.form__inputgroup}>
              <label htmlFor="genre">Genre</label>
              <select
                id="genre"
                onChange={handleChange}
                name="genre"
                className={styles.form__input}
              >
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
  );
}

export default AddMovieForm;
