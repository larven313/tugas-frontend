// Membuat array
const names = ['Mikel', 'Hannah', 'Jonas'];

// forEach : untuk  looping dan iterasi
names.forEach(function(name){
    console.log(`Nama : ${name}`);
});

// map : untuk transform atau mengubah data
// karena mengembalikan nilai maka ditampung ke variabel
const hasilFormat = names.map(function(name) {
    return `Mr/Mrs ${name}`
});

console.log(hasilFormat);