/**
 * Spread syntax digunakan untuk memisahkan array atau object menjadi 1 item (single value)
 * notasinya adalah ... (titik tiga)
 */

// membuat array family
const family = ['Mikel', 'Hannah'];

// menggunakan spread syntax
const newFamily = [...family, 'Jonas', 'Martha'];

console.log(newFamily);

// copy object
const user = {
    name: "Sukma",
    major : "Informatics"
};

const newUser = {
    ...user,
    age:20
}

console.log(newUser);