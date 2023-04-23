import styles from "./AddCaseForm.module.css";
import { useState } from "react";

const AddCaseForm = (props) => {
  const { provinces, setProvinces } = props;

  const [formData, setFormData] = useState({
    province: "",
    status: "kasus",
    quantity: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // menambahkan isi object baru
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { province, status, quantity } = formData;

    const updatedProvinces = provinces.map((provinceData) => {
      if (provinceData.kota === province) {
        return {
          ...provinceData,
          [status]: provinceData[status] + parseInt(quantity),
        };
      } else {
        return provinceData;
      }
    });

    setProvinces(updatedProvinces);

    setFormData({
      province: "",
      status: "kasus",
      quantity: 0,
    });
  };

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            src={require("./konsep.png")}
            alt=""
            className={styles.form__image}
          />
        </div>
        <div className={styles.form__right}>
          <h1 className={styles.form__title}>Form Covid</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__inputgroup}>
              <label htmlFor="provinsi" className={styles.form__label}>
                Provinsi
              </label>
              <select
                name="province"
                id="provinsi"
                className={styles.form__input}
                value={formData.province}
                onChange={handleInputChange}
              >
                <option value="" hidden>
                  -Pilih Provinsi-
                </option>
                {provinces.map(function (province) {
                  return (
                    <option value={province.kota} key={province.id}>
                      {province.kota}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className={styles.form__inputgroup}>
              <label htmlFor="status" className={styles.form__label}>
                Status
              </label>
              <select
                name="status"
                id="status"
                className={styles.form__input}
                value={formData.status}
                onChange={handleInputChange}
              >
                <option value="" hidden>
                  -Pilih Status-
                </option>
                <option value="kasus">Positif</option>
                <option value="sembuh">Sembuh</option>
                <option value="dirawat">Dirawat</option>
                <option value="meninggal">Meninggal</option>
              </select>
            </div>

            <div className={styles.form__inputgroup}>
              <label htmlFor="quantity" className={styles.form__label}>
                Jumlah
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                className={styles.form__input}
                value={formData.quantity}
                onChange={handleInputChange}
              />
            </div>

            <button className={styles.form__button} type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
export default AddCaseForm;
