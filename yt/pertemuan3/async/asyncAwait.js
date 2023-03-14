/**
 * Async Await adalah asyncrhonus yang menggunakan penulisan syncrhonus
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

// keyword async memberi tahu bahwa ada operasi asynchronus di dalamnya
async function main() {
    // Solusinya pengganti promise bisa menggunakan async await
    console.log(await download());
    console.log(await verify());
    notify();
}

main()