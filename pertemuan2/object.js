// Membuat object: {}
const user = {
    name : 'Ucup',
    age : 20,
    major : 'Informatics'
}

// Mengakses nilai
// console.log(user.name);
// console.log(user['age']);

// Looping object menggunakan for in
for (const key in user ){
    console.log(user[key]);
}