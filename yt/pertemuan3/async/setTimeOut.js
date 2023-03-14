/**
 * menggunakan metode synchronus, menjalankan semua function secara bersamaan
 *  tanpa menunggu proses sebelumnya selesai. untuk menangani hal itu bisa menggunakan callback
 * namun cara in iakan mendapatkan masalah callback hell karena itu solusinya adalah menggunakan Promise
 */
function download(callbackVerify) {
    setTimeout(function(){
        console.log("Download selama 3 detik");
        callbackVerify();
    }, 3000);
}

function verify(callbackNotify) {
    setTimeout(function(){
        console.log("Verify selama 2 detik");
        callbackNotify();
    },2000)
}

function notify() {
    console.log("Download selesai");
}

function main() {
    // Solusinya: callback

    download(function() {
        verify(function(){
            notify();
        });
    })
}

main()