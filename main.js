

// beratBadan = 73

// if(pacar == null) {
//     pacar = "belum punya"
// } else {
//     pacar = "udah punya"
// }
// let saldoAwal = 50000
// let saldoTambahan = 80000
// const hutang = 30000
// const saldoAkhir = saldoAwal + saldoTambahan - hutang

// const x = 5123
// const y = 123128
// const z = x / y 

// alert(`hasil dari x = ${x} : y = ${y} adalah ${z}`)


// alert(`nama saya ${nama} usia saya itu ${usia} tinggi badan saya adalah ${tinggiBadan} berat badan saya ${beratBadan} dan pacar saya ${pacar}`);
// alert(`saldo awal saya sebesar Rp. ${saldoAwal} & saldo tambahan yang akan saya miliki sebesar Rp. ${saldoTambahan} jadi total saldo yang saya miliki adalah sebanyak Rp. ${saldoAkhir}`);

let nama = "dede sudiahna"; //tipestring
let usia = 30; //tipe angka
let tinggiBadan = 166.5; //tipe angka
let beratBadan ; //undefined
let pacar = 12123;

beratBadan = 60

//jika pacar saya null makan pacar saya belum punya tapi selain dari null makan pacar saya udah punya
// if(pacar == null) {
// pacar = 'belum punya'
// }else {
//     pacar = 'udah punya'
// }   

// switch (pacar) {
//     case 1: //case 1
//         pacar = 'punya 1 aja'
//         break 
//     case 2: //case 2
//         pacar = "punya pacar 2, aku cukup playboy"
//         break
//     default: // jika tidak termasuk 1 dan dua maka akan ke default
//         pacar = "belum punya pacar"
//         break
// }

// let saldoAwal = 50000
// let saldoTambahan = 80000
// const hutang = 30000
// const saldoAkhir = saldoAwal + saldoTambahan - hutang

// const x = 3 
// const y = 5
// const z = x / y

// alert(`nilai x = ${x} nilai y = ${y} maka x+y = ${z}`)

// alert(`nama saya ${nama} usia saya itu ${usia} tinggi badan saya adalah ${tinggiBadan}cm berat badan saya ${beratBadan}kg dan pacar saya ${pacar}`) //memberikan alert di browser

// alert(`saldo awal saya sebesar Rp.${saldoAwal} dan saldo tambahan yang akan saya miliki Rp.${saldoTambahan}jadi total saldo yang saya miliki Rp. ${saldoAkhir} `)

// let namaGuru = ['jodi', 'bunga', 'rahman']

// namaGuru.push('dean', 'fikri') //menambahkan value
// namaGuru.shift() // menghapus awal
// namaGuru.pop() //menghapus akhir


// alert(namaGuru)

// let namaGuru = []
// namaGuru[0] = 'dea'
// namaGuru[1] = 'fikir'
// namaGuru.shift()

// alert(namaGuru)

//forloop pengulangan

//3statement 

//ga perlu buat console.log berulang kali
// for(let i = 1; i <= 20; i = i+1) { //nilai awal i adalah 0 atau "belm ada data" ketika jika i kurang dari sama dengan 10 maka i sama dengan i tambah 1, i akan terlooping i+1 sampai nilainya sama dengan 10
//     console.log('dede sudiahna')
// }

// const namaGuru = ['dea','fikri','retno','bunga']

// jadi namaGuru akan dipanggil melalui I dengan kondisi looping urutan I dari 0 terus bertambah +1 sampai dengan namaGuru lenght habis
// for(let i = 0; i < namaGuru.length; i++) {
//     console.log(namaGuru[i])
// }



// sedangkan ketika i kurang dari 10  dikondisikan dengan looping i+1 dan di console.log d
// while(i < 10) {
//     i++
//     console.log('dede sudiahna')  
// }


//lakukan deklarasi dede sudiahna  ketika i kurang dari 10 dengan i terus bertambah +1 setiao deklarasi
// let i = 0
// do  {
//     i++
//     console.log('dede sudiahna')
// } while (i < 10)

// tugas kecil 
// 1. promp untuk mengetahui saldo akhir dari yang diinputkan user
// 2. menentukan hari dari tanggal yang ada saat ini di pc kalian

let hari = new Date().getDay()
let bulan = new Date().getMonth()
let tahun = new Date().getFullYear()
console.log(`hari ini adalah hari ${hari} bulan ${bulan} tahun ${tahun}`)