// Membuat array of object

const users = [
    {
        name:"Hannah",
        age:16
    },
    {
        name:"Sukma",
        age:20
    },
    {
        name:"Jonas",
        age:25
    },
];

/**
 * Find : mencari 1 data
 * Kondisi/kriteria : mencari umur > 18
 */

// const hasilPencarianFind = users.find(function(user) {
//     return user.age > 18;
// });
// arrow function
const hasilPencarianFind = users.find((user) => user.age > 18);

const hasilPencarianFilter = users.filter(function(user) {
    return user.age > 18;
});

console.log(hasilPencarianFind);

console.log(hasilPencarianFilter);