/**
 *  membuat fungsi sum untuk menjumlahkan bilangan.
 * Funsgi sum menerima rest params.
 * rest parameter dan spread syntax menggunakan ... (titik tiga) artinya 
 * menerima semua paramater kumdian dijadikan array
 */

function sum(...numbers) {
    let hasil = 0;
    for (const number of numbers) {
        console.log(number);    
        hasil = hasil + number;
    }
    console.log(hasil);
}

sum(1,2,3,4,5)