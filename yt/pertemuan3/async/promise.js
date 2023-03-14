/**
 * Membuat Promise menggunakan new Promise
 * Promise menerima callback: resolve dan reject
 */

function download() {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve("Download selama 3 detik");
        }, 3000);
    })
   
}

function verify() {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve("Verify selama 2 detik");
        },2000)
    })
}

function notify() {
    console.log("Download selesai");
}

function main() {
    // Solusinya callback hell menggunakan promise
    download().then(function(hasil) {
        console.log(hasil);
        
        verify().then(function(hasil) {
            console.log(hasil);

            notify();
        })
        .catch(function(error) {
            console.log(error);
        });
    });

}

main()