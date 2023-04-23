const Province = (props) => {
  const { province, index } = props;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{province.kota}</td>
      <td>{province.kasus}</td>
      <td>{province.sembuh}</td>
      <td>{province.dirawat}</td>
      <td>{province.meninggal}</td>
    </tr>
  );
};
export default Province;
