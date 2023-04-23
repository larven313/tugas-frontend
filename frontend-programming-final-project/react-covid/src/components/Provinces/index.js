import Province from "../Province";
import styles from "./Provinces.module.css";

const Provinces = (props) => {
  const { provinces } = props;
  return (
    <div className={styles.container}>
      <h1>Provinsi</h1>
      <p>Data Covid Berdasarkan Provinsi</p>
      <table className={styles.table} cellSpacing="0" cellPadding="10">
        <thead>
          <tr>
            <th>No</th>
            <th>Provinsi</th>
            <th>Positif</th>
            <th>Sembuh</th>
            <th>Dirawat</th>
            <th>Meninggal</th>
          </tr>
        </thead>
        <tbody>
          {provinces.map(function (province, index) {
            return <Province key={index} index={index} province={province} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Provinces;
