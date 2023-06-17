import { useEffect, useState } from "react";

function Counter() {
  // Variable angka
  //   let angka = 0;

  //useState() mengembalikkan sepasang value (array):[0, function()]
  const [angka, setAngka] = useState(0);

  function addAngka() {
    // state tidak boleh diubah secara langsung
    setAngka(angka + 1);
    console.log(angka);
  }

  /**
   * useEffect dijalankan pada lifecycle mount dan update.
   */

  function updateDom() {
    console.log("Lifecycle: Dimount");

    // Melakukan side effect: mengakses DOM
    document.title = `Hasil: ${angka}`;
  }

  useEffect(updateDom, [angka]);

  console.log("Lifecycle: Dirender");

  return (
    <div>
      <p>Hasil : {angka}</p>
      <button onClick={addAngka}>Add</button>
    </div>
  );
}

export default Counter;
