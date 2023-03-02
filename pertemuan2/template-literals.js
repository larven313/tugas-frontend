const name = 'ucup joss';
const bod = 2000;

// template literals
const greeting = `
    Nama : ${name}.
    Umur: ${2023 - bod}
`;
// Nama : ${name}. = interpolasi
// Umur: ${2022 - bod} = ekspresi
console.log(greeting);